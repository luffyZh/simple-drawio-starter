import { Result, Button } from "antd";
import Router from "next/router";

export default function List() {
  return (
    <Result
      style={{ marginTop: 60 }}
      status="403"
      title="个人中心页"
      subTitle="可以在这里对图表进行管理"
      extra={ 
        <>
          <Button onClick={() => Router.push('/drawio?id=333')} danger>编辑图表</Button>
          <Button style={{ marginLeft: 20 }} type="primary" onClick={() => Router.push('/')}>返回首页</Button>
        </>
      }
    />
  );
} 