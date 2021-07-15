import * as React from "react"
import "../css/index.css"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'


const IndexPage = () => {
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
          <nav className="container mx-auto flex flex-row justify-between  text-white fixed p-5  h-20 z-20 self-center ">
            <div className="text-4xl h-20 flex items-center hover:text-indigo-700">Test Company</div>

            <div className="h-20 items-center flex hidden lg:flex">
              <Link className="p-5 text-lg hover:text-indigo-700" to="/">Home</Link>
              <Link className="p-5 text-lg hover:text-indigo-700" to="/">Projects</Link>
              <Link className="p-5 text-lg hover:text-indigo-700" to="/">Skills</Link>

            </div>

            <div className=" bg-indigo-600 fixed bottom-4 right-4 rounded-full   z-50 h-17 w-17   lg:hidden " onClick={toggleMenu}>

              <div class="menu-btn">
                <div class="menu-btn__burger"></div>
              </div>

            </div>

            <div className="bg-indigo-700 text-3xl fixed flex flex-col py-4 justify-center items-center inset-0 hidden js-toggle">
              <Link className="p-5 text-lg hover:text-indigo-200" to="/">Home</Link>
              <Link className="p-5 text-lg hover:text-indigo-200" to="/">Projects</Link>
              <Link className="p-5 text-lg hover:text-indigo-200" to="/">Skills</Link>
            </div>

          </nav>

          <div className="flex flex-col justify-center items-center h-screen w-screen z-49">
            <h3 className="text-white md:text-5xl text-4xl  mb-10 text-center">500m über Hamburg</h3>
            <h4 className="text-white md:text-4xl text-3xl text-center">Cocktails & Sushi</h4>
          </div>




        </div>
      </BackgroundImage>

      <div className="h-screen bg-indigo-700">

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