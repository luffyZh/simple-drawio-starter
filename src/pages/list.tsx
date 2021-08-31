import { Result, Button } from "antd";
import Router from "next/router";

export default function List() {
  return (
    <Result
      style={{ marginTop: 60 }}
      status="403"
      title="个人中心页"
      subTitle="可以在这里对图表进行管理"
      extra={<Button type="primary" onClick={() => Router.push('/')}>返回首页</Button>}
    />
  );
} 