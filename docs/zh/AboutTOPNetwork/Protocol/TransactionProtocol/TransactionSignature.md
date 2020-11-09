# 交易签名

对交易签名前请将交易对象序列化。

### 序列化交易对象

交易对象数据结构请参见[交易协议](docs-cn/AboutTOPNetwork/Protocol/TransactionProtocol/TransactionProtocol.md)。

将交易对象序列化，即按照固定顺序将交易对象中的参数转换成二进制数组。

- 交易对象中的参数主要有4个基础类型，分别是 Uint16, Uint32, Uint64, String。
- 由于Java中没有无符号类型，所以涉及数字一律用BigInteger类型，序列化时再转换。
- 序列化采用小端字节序(little endian)。
- 其他组合类型都需要拆分成基础类型处理，例如在JavaSDK的投票接口中，传入的是Map<String, BigInteger>对象，需拆分成String和Uint64拼接在一起。

请按照下表中的顺序将参数序列化。

| 参数名称             | 参数类型 | 示例值             | 序列化值(Hex)            |
| -------------------- | -------- | ------------------ | ------------------------ |
| tx_type              | Uint16   | 4                  | 0x0400                   |
| tx_len               | Uint16   | 0                  | 0x0000                   |
| tx_structure_version | Uint32   | 0                  | 0x00000000               |
| to_ledger_id         | Uint16   | 0                  | 0x0000                   |
| from_ledger_id       | Uint16   | 0                  | 0x0000                   |
| tx_deposit           | Uint32   | 100000             | 0xa0860100               |
| tx_expire_duration   | Uint16   | 100                | 0x6400                   |
| send_time_stamp      | Uint64   | 1602820177         | 0x5118895f00000000       |
| tx_random_nonce      | Uint32   | 0                  | 0x00000000               |
| last_tx_nonce        | Uint64   | 2                  | 0x0200000000000000       |
| last_tx_hash         | String   | 0x2a21b09155cad8aa | 0xaad8ca5591b0212a       |
| challenge_proof      | String   | ""                 | 0x00000000               |
| ext                  | String   | ""                 | 0x00000000               |
| note                 | String   | "1231fsd"          | 0x0700000031323331667364 |
| sender_action        | Object   | -                  | -                        |
| receiver_action      | Object   | -                  | -                        |

sender action 参数序列化

| 参数名称               | 参数类型 | 示例值                                 | 序列化值(Hex)                                                |
| ---------------------- | -------- | -------------------------------------- | ------------------------------------------------------------ |
| action_hash            | Uint32   | 0                                      | 0x00000000                                                   |
| action_type            | Uint16   | 0                                      | 0x0000                                                       |
| action_size            | Uint16   | 0                                      | 0x0000                                                       |
| tx_sender_account_addr | String   | T-0-LRaFyaGZ1isfcKnhLxPLoePFUmY2iyFGv6 | 0x26000000542d302d4c5261467961475a31697366634b6e684c78504c6f655046556d5932697946477636 |
| action_name            | String   | ""                                     | 0x00000000                                                   |
| action_param           | String   | 0x000000008c00000000000000             | 0x0c000000000000008c00000000000000                           |
| action_ext             | String   | ""                                     | 0x00000000                                                   |
| action_authorization   | String   | ""                                     | 0x00000000                                                   |

receiver action 参数序列化

| 参数名称               |               | 参数类型 | 示例值                                   | 序列化值(Hex)                                                |
| ---------------------- | ------------- | -------- | ---------------------------------------- | ------------------------------------------------------------ |
| action_hash            |               | Uint32   | 0                                        | 0x00000000                                                   |
| action_type            |               | Uint16   | 6                                        | 0x0000                                                       |
| action_size            |               | Uint16   | 0                                        | 0x0000                                                       |
| tx_sender_account_addr |               | String   | T-0-LazNzvyHLptzdPFkaynNHKqDY4qXZ2gCVh   | 0x26000000542d302d4c617a4e7a7679484c70747a6450466b61796e4e484b7144593471585a3267435668 |
| action_name            |               | String   | ""                                       | 0x00000000                                                   |
| action_param           |               | String   | 0x000000008c00000000000000               | 0x0c000000000000008c00000000000000                           |
| action_ext             |               | String   | ""                                       | 0x00000000                                                   |
| action_authorization   |               |          |                                          |                                                              |
|                        | authorization | String   | 非部署用户合约交易：""                   | 0x00000000                                                   |
|                        |               |          | 部署用户合约交易，需要传入用户合约公钥： |                                                              |

其中action_param序列化请参见[action_param序列化](docs-cn/AboutTOPNetwork/Protocol/TransactionProtocol/action-param-serialization.md)。

### 签名

**签名步骤**

1. 对序列化后的二进制数组进行SHA256 hash计算。

2. 使用私钥对步骤1计算的结果进行签名。

**签名算法**

ECDSA(secp256k1)

**Java Demo Code**

```java
public static String signData(byte[] dataBytes, BigInteger privateKey) throws Exception {
        ECKey ceKey = ECKey.fromPrivate(privateKey, false);
        Sha256Hash sha256Hash = Sha256Hash.wrap(dataBytes);
        ECKey.ECDSASignature sig = ceKey.sign(sha256Hash);

        byte recId = ceKey.findRecoveryId(sha256Hash, sig);

        String authHex = StringUtils.bytesToHex(sig.r.toByteArray()) + StringUtils.bytesToHex(sig.s.toByteArray());
        if (authHex.length() == 130) {
            if(recId == 1 && "00".equals(authHex.substring(0, 2))) {
                authHex = authHex.replaceFirst("00", "01");
            }
            return "0x" + authHex;
        }
        if(recId == 1) {
            authHex = "01" + authHex;
        } else {
            authHex = "00" + authHex;
        }
        return "0x" + authHex;
    }
```

**签名后结果**

0x015c5be7876376b09297f9247e34e1e921474f2f66c61700e57832546e6c1de918136abe1a56c346ebf2dce9358941df89d02fd5274222435e7bd0f756de1adf83