import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {AppLayout} from "../src/modules/layout/AppLayout";

const Home: NextPage = () => {
  return (
    <AppLayout/>
  )
}

export default Home
