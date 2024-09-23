import React from 'react'
import Header from './header'
import '../css/gallery.css'
import image from '../images/image.png'

function Gallery() {
  return (
    <div>
    <>
        <Header />
        <div className="container-fluid">
            <div className="row">
            
                <div className="col-12 image">
                <h3>Gallery</h3>
                <img src={image} alt={image} height={'150px'} width={'150px'}></img>
                <img src={image} alt={image} height={'150px'} width={'150px'}></img>
                <img src={image} alt={image} height={'150px'} width={'150px'}></img>
                <img src={image} alt={image} height={'150px'} width={'150px'}></img>
                <img src={image} alt={image} height={'150px'} width={'150px'}></img>
                <img src={image} alt={image} height={'150px'} width={'150px'}></img>


                </div>
            </div>
        </div>
    </>
      
    </div>
  )
}

export default Gallery
