import * as React from "react"
import "../css/index.css"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { StaticImage } from "gatsby-plugin-image"


const IndexPage = () => {

  window.addEventListener("scroll", (e) => {
    if (window.scrollY >= 400) {
      document.querySelector("nav").classList.add("bg-gray-900");
    } else {
      document.querySelector("nav").classList.remove("bg-gray-900");
    }
  })
  const data = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "background.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          
        }
      }
    `
  )

  // Use like this:
  const bgImage = data.background.childImageSharp.fluid


  return (
    <div className="overflow-hidden">
      <BackgroundImage
        Tag="section"
        fluid={bgImage}


        preserveStackingContext
      >
        <div className="min-h-screen bg-black bg-opacity-50 flex flex-col items-stretch">
          <nav className="nav w-screen mx-auto flex flex-row justify-between  text-white fixed p-5  h-20 z-20 self-center ">
            <div className="container mx-auto flex flex-row justify-between self-center">
              <div className="text-4xl h-20 flex items-center hover:text-yellow-500">Test Company</div>

              <div className="h-20 items-center flex hidden lg:flex">
                <Link className="p-5 text-lg hover:text-yellow-500" to="/">Home</Link>
                <Link className="p-5 text-lg hover:text-yellow-500" to="/">Our Chefs</Link>
                <Link className="p-5 text-lg hover:text-yellow-500" to="/">Food</Link>

              </div>
            </div>
            <div className=" bg-yellow-500 fixed bottom-4 right-4 rounded-full   z-50 h-17 w-17   lg:hidden " onClick={toggleMenu} onKeyDown={toggleMenu} role="button" tabIndex={0}>

              <div class="menu-btn">
                <div class="menu-btn__burger"></div>
              </div>

            </div>

            <div className="bg-gray-900 text-3xl fixed flex flex-col py-4 justify-center items-center inset-0 hidden js-toggle">
              <Link className="p-5 text-lg hover:text-yellow-500" to="/">Home</Link>
              <Link className="p-5 text-lg hover:text-yellow-500" to="/">Our Chefs</Link>
              <Link className="p-5 text-lg hover:text-yellow-500" to="/">Food</Link>
            </div>

          </nav>

          <div className="flex flex-col justify-center items-center h-screen w-screen z-49 ">
            <h3 className="text-white md:text-5xl text-4xl  mb-10 text-center">500m über Hamburg</h3>
            <h4 className="text-white md:text-4xl text-3xl text-center">Cocktails & Sushi</h4>
          </div>




        </div>
      </BackgroundImage>

      <div className=" pt-40 h-full bg-gray-900 flex flex-col items-center text-center">

        <h4 className="text-4xl  text-yellow-500">Our Chefs</h4>
        <p className="text-white pt-5 text-xl">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>

        <div className=" grid gap-20 grid-cols-1 md:grid-cols-3     mt-20 )">
          <div className="shadow-md overflow-hidden h-72 w-80 bg-white rounded-md"><StaticImage className="h-full" src="../images/cook1.jpg"></StaticImage></div>
          <div className="shadow-md overflow-hidden h-72 w-80 bg-white rounded-md"><StaticImage className="h-full" src="../images/cook2.jpg"></StaticImage></div>
          <div className="shadow-md overflow-hidden h-72 w-80 bg-white rounded-md"><StaticImage className="h-full" src="../images/cook3.jpg"></StaticImage></div>

        </div>

      </div>

      <div className="min-h-screen bg-gray-900 pt-40  flex  flex-col items-center">
        <h4 className="text-4xl text-yellow-500 mb-5">Menu</h4>
        <div className="lg:container lg:min-h-screen  my-20 grid gap-10 lg:grid-cols-4 grid-rows-20 sm:grid-cols-1 sm:grid-rows-auto">
          <div className="row-span-4 col-span-2 bg-white"><StaticImage className="h-full" src="../images/food1.jpg"></StaticImage></div>
          <div className="row-span-2 col-span-2 bg-white h-auto w-auto"><StaticImage className="h-full" src="../images/food10.jpg"></StaticImage></div>
          <div className="row-span-4 col-span-2 bg-white h-auto w-auto"><StaticImage className="h-full" src="../images/food3.jpg"></StaticImage></div>
          <div className="row-span-5 col-span-2 bg-white h-96 w-auto"><StaticImage className="h-full" src="../images/food9.jpg"></StaticImage></div>
          <div className="row-span-6 col-span-2 bg-white h-auto w-auto"><StaticImage className="h-full" src="../images/food5.jpg"></StaticImage></div>
          <div className="row-span-3 col-span-1 bg-white h-96 w-auto"><StaticImage className="h-full" src="../images/food6.jpg"></StaticImage></div>
          <div className="row-span-3 col-span-1 bg-white h-96 w-auto"><StaticImage className="h-full" src="../images/food4.jpg"></StaticImage></div>



        </div>
      </div>

    </div>


  )
}

export default IndexPage

let menuOpen = false;



function toggleMenu() {
  const navToggle = document.getElementsByClassName("js-toggle");
  const menuBtn = document.querySelector('.menu-btn');
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");



  }


}