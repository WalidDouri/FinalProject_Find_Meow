import React from 'react'
// import ProgressBar from '../components/ProgressBar'
import SubmitForm from '../components/SubmitForm'
import { GithubOutlined, YoutubeOutlined, RedditOutlined, TwitterOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';

import { Layout } from 'antd'

import './ReportPet.scss'
import Slider from '@ant-design/react-slick';

const { Header, Footer, Sider, Content } = Layout;

export default function ReportPet() {
  return (
    <Layout>
        {/* <Header id="header">HEADER </Header> */}
      <Layout>
      {/* <Sider id="sider">SLIDER
        <div className="share-icons">
          <GithubOutlined />
          <YoutubeOutlined />
          <InstagramOutlined />
          <FacebookOutlined />
          <RedditOutlined />
          <TwitterOutlined />
        </div> */}
      {/* </Sider> */}
      
      {/* </Layout > */}
      <Content id="content">
        <h1>THIS IS THE REPORT pET PAGE</h1>
        <SubmitForm />
      </Content>
      </Layout>
        <Footer id="footer">Footer</Footer>
    </Layout>
  )
}
 

