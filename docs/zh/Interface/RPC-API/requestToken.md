# 获取访问链身份令牌

在与链交互前需要先获取身份令牌。

根据账户获取身份令牌（identity token），每个账户身份令牌不同。

<!-- ::: sss sdsdf dg gdf fgh ds , ::: -->
<!-- ::: 获取身份令牌前，请确保您已获取身份令牌前，请确保您已获取身份令牌前，请确保您已获取身份令牌前，请确保您已获取身份令牌前，请确保您已获取身份令牌前，请确保您已获取身份令牌前，请确保您已获取身份令牌前，请确保您已获取身份令牌前，请确保您已获取身份令牌前，请确保您已获取身份令牌前，请确保您已获取身份令牌前，请确保您已获取身份令牌前，请确保您已. ::: -->
::: callout 
Instructions are the equivalent for lotus and lotus-miner. For simplicity, we will just show how to do it with lotus by editing the Lotus Node configuration, but the same can be achieved by editing the Lotus Miner configuration.
:::
::: callout
**Instructions are the equivalent for `lotus` and `lotus-miner`**. For simplicity, we will just show how to do it with `lotus` by editing the [Lotus Node configuration](../../get-started/lotus/configuration-and-advanced-usage.md), but the same can be achieved by editing the [Lotus Miner configuration](../../mine/lotus/miner-configuration.md).
:::


## 获取访问链身份令牌
**请求方式**

```
requestToken
```

**请求参数**

无。

**返回参数**

| 参数名称           | 类型   | 说明                                                 |
| ------------------ | ------ | ---------------------------------------------------- |
| secret_key         | String | 私钥。                                               |
| signature_method   | String | 签名方法。                                           |
| signature_ver_code | String | 签名方法版本号。                                     |
| identity_token     | String | 身份令牌，用于和主链交互，后续所有请求都需要该参数。 |

**请求样例**

```
curl -X POST --data 'target_account_addr=T-0-LVb72cJ9LzaQbdR41Zvx7dsAL1oDFFGQrJ&body=null&method=requestToken&sequence_id=8&identity_token=&version=1.0'  http://localhost:19081
```

**返回样例**

* 成功返回

```
{
	"data": {
		"secret_key": "539d7573-3687-467b-a080-a21be9f1a332",
		"signature_method": "hmac_sha2",
		"signature_ver_code": "1.0",
		"identity_token": "66e1aebc-5e42-451e-aea2-e75725dd26cb"
	},
	"errmsg": "ok",
	"errno": 0,
	"sequence_id": "1"
}
```

* 失败返回

无。