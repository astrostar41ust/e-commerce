import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600' >
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam dolorum quo non, eius corrupti voluptas qui. Veniam, vitae est cupiditate molestias similique iste exercitationem, quos excepturi voluptatum velit natus odio.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, nihil? Maiores laudantium odit a nesciunt corrupti? Asperiores optio nam odio illum pariatur? In quo error magnam esse quas, aliquam laboriosam?</p>
          <b className='text-gray-800 '>Our Mission </b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam maiores ad iste placeat consectetur earum corporis eaque, cum numquam laborum quia explicabo et, accusantium debitis modi quisquam ipsa veniam!</p>
        </div>
      </div>
      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-gray-600'>Quality Assuarance:</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta sapiente, magnam delectus quis aliquam quam a eos quibusdam sit repellat saepe inventore nihil velit optio nemo, unde aliquid. Consequuntur, explicabo.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-gray-600'>Convinience:</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur consectetur quidem ducimus cumque aperiam, quam vel hic commodi sed nihil quae, ipsa totam dolor at excepturi et, ut accusantium ab!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-gray-600'>Exceptional Customer Service:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur, in at vitae veniam fugit saepe iste harum rerum, placeat ea fugiat laborum, tempora recusandae voluptatem quidem nesciunt repellendus corporis.</p>        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About