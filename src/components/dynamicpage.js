import React from 'react'
import './dynamicpage.css';
import Footer from '../layouts/Footer';

function DynamicPage({ pageInfo }) {


  //Create an array containing the position of the image (left, right, mid)
  const imagesArray = pageInfo.images.map((loc) => {
    return Object.keys(loc).map((key) => {
      if (key === 'mid') {
        return loc[key].map((img, index) => {
          return <section key={`${index}-${key}`} className='fitscreenSec workSec workPage blueBg mb--pd-mg'>
            <div className='container-fluid'>
              <div className='full--image'>
                <img src={img} alt='' />
              </div>
            </div>
          </section>

        })
      } else {
        return loc[key].map((img, index) => {
          return <section key={`${index}-${key}`} className='fitscreenSec workSec workPage blueBg mb--pd-mg side-size'>
            <div className='container-fluid'>
              <div className={`half--image-${key}`}>
                <img src={img} alt='' />
              </div>
            </div>
          </section>
        })
      }
    })
  });



  //Create an array storing the order
  const imagesLayout = (originalArray) => {
    // Create an array to store the grouped elements
    const groupedArray = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < originalArray.length; j++) {
        groupedArray.push(originalArray[j][0][i])
      }
    }
    return groupedArray;
  }

  const layoutArray = imagesLayout(imagesArray);

  return (
    <div className='wrapper' >
      <section className='fitscreenSec workSec workPage' style={{ padding: '0' }} >
        <div className='header--container'>
          <div className='header--image' style={{ backgroundImage: `url('${pageInfo.headerImage}')` }}></div>
          <h1>{pageInfo.projectName}</h1>
        </div>
      </section>
      <section className='fitscreenSec workSec workPage blueBg mb--pd-mg'>
        <div className='text--box'>
          <div className='block--list'>
            {
              pageInfo.textBox.map((header, index) => {
                return Object.keys(header).map((key) => {
                  if (header[key].includes(';')) {
                    const lines = header[key].split(';').filter(line => line.trim() !== '');
                    return (
                      <div key={`${index}-${key}`}>
                        <h1>{key}</h1>
                        {
                          lines.map((line, key) => {
                            return (<h6 key={key}>{line}</h6>)
                          })
                        }

                      </div>
                    )
                  } else {
                    return (
                      <div key={`${index}-${key}`}>
                        <h1>{key}</h1>
                        <h6>{header[key]}</h6>
                      </div>
                    )
                  }

                })
              })
            }



          </div>
          <div className='project--desc'>
            <h6>
              {pageInfo.description}
            </h6>
          </div>

        </div>
      </section>
      {
        layoutArray
      }

      <Footer color='white' />
    </div>
  )
}

export default DynamicPage
