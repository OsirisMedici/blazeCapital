import React from 'react'
import shadows from '../theme/shadows.module.css';
import client1 from '../assets/client-1.png'
import client2 from '../assets/client-2.png'
import client3 from '../assets/client-3.png'
import client4 from '../assets/client-4.png'
import client5 from '../assets/client-5.png'
import client6 from '../assets/client-6.png'

import { Box, Container, Flex, Text, Heading, Image } from "theme-ui";
const company = () => {
  return (
    <>
    <div className={shadows.company}>
      <div className={shadows.comphead}>Trusted By</div>
      Helping B2B Software & Service Companies Is What We Do
      <div className={shadows.images}>
        <div className={shadows.subimg}>
      <Image src={client1}></Image>
        </div>
        <div className={shadows.subimg}>
      <Image src={client2}></Image>
        </div>
        <div className={shadows.subimg}>
      <Image src={client3}></Image>
        </div>
        <div className={shadows.subimg}>
      <Image src={client4}></Image>
        </div>
        <div className={shadows.subimg}>
      <Image src={client5}></Image>
        </div>
        <div className={shadows.subimg}>
      <Image src={client6}></Image>
        </div>
      </div>
    </div>
    </>
  )
}

export default company