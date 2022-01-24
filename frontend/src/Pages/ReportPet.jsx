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
       
      <Layout>
      
      <Content id="content">
        <h1>Report Missing Cat</h1>
        <SubmitForm />
      </Content>
      </Layout>
        {/* <Footer id="footer">Footer</Footer> */}
    </Layout>
  )
}
 

