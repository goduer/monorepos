import { useState } from 'react'
import { Header } from '@/components'
import { Layout, Divider, Button, Typography } from '@arco-design/web-react'
import { IconBulb } from '@arco-design/web-react/icon'
import Link from 'next/link'

const LayHeader = Layout.Header
const Footer = Layout.Footer
const Content = Layout.Content
const { Title, Paragraph } = Typography

export default function Home() {
  const [status, setStatus] = useState<boolean>(false)

  const testBtn = () => {
    setStatus(!status)
    status
      ? document.body.setAttribute('arco-theme', 'dark')
      : document.body.removeAttribute('arco-theme')
  }

  return (
    <>
      <Header title={'hello goduer'} description={'goduer is a coding!'} />
      <Layout style={{ height: '100vh' }}>
        <LayHeader>
          <Button
            icon={<IconBulb />}
            type="primary"
            shape="circle"
            onClick={testBtn}
          />
        </LayHeader>
        <Content>
          <Title heading={5}>Welcome to next.js!</Title>
          <Link href="/about">
            <Paragraph>about</Paragraph>
          </Link>
          <Divider
            style={{
              borderBottomWidth: 2,
              borderBottomStyle: 'dotted'
            }}
          />
          <Title heading={5}>Default</Title>
          <Paragraph>
            A design is a plan or specification for the construction of an
            object or system or for the implementation of an activity or
            process, or the result of that plan or specification in the form of
            a prototype, product or process. The verb to design expresses the
            process of developing a design. In some cases, the direct
            construction of an object without an explicit prior plan (such as in
            craftwork, some engineering, coding, and graphic design) may also be
            considered to be a design activity.
          </Paragraph>
        </Content>
        <Footer>
          <Paragraph>powerBy ❤️ goduer</Paragraph>
        </Footer>
      </Layout>
      <style>{`
        .arco-layout-header,
        .arco-layout-footer,
        .arco-layout-content {
          color: var(--color-primary-6);
          text-align: center;
          font-stretch: condensed;
          font-size: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .arco-layout-header,
        .arco-layout-footer {
          height: 64px;
          background-color: var(--color-primary-light-1);
        }

        .arco-layout-content {
          background-color: var(--color-primary-light-1);
          color: var(--color-primary-6);
        }
      `}</style>
    </>
  )
}
