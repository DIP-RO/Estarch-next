import Image from 'next/image'
import React from 'react'

export default function ServiceMoto() {
  return (
    <div className="flex justify-center items-center mt-10">
        <div className="flex gap-5 ">
        <div>
            <Image width={300}  height={100} src="https://manfarebd.com/_next/static/media/Fastest-Shipping.efdae6a0.svg" alt=""  />
        </div>
        <div>
            <Image width={300}  height={100} src="https://manfarebd.com/_next/static/media/Easy-Return-Policy.247734ff.svg" alt=""  />
        </div>
        <div>
            <Image width={300}  height={100} src="https://manfarebd.com/_next/static/media/Premium-Qualiy-Product.220aaabd.svg" alt=""  />
        </div>
        <div>
            <Image width={300}  height={100} src="https://manfarebd.com/_next/static/media/Online-Support-24-7.a66f7a77.svg" alt=""  />
        </div>
       
    </div>
    </div>
  )
}
