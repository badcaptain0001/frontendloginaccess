import React, { useState, useEffect,useRef } from 'react'
import axios from 'axios';

function Slider() {
  const [uploadImg, setUploadImg] = useState();
  const [imgData, setImgData] = useState();

  const log = (args) => {
    console.log(args);
  }
  const ref = useRef();
  const reset = () => {
    ref.current.value = '';
  }
  const uploadImgHandler = (e) => {
    const formData = new FormData();
    formData.append('file', uploadImg);
    axios.post('https://ecomsamp.herokuapp.com/file/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
      console.log(res.data);
      if(res.status === 200) {
        // input value set to null
        reset();
      }
    });
  }
  
  useEffect(() => {
    const getImg = async () => {
    axios.get('https://ecomsamp.herokuapp.com/files').then((res) => {
      setImgData(res.data);
    }
    );
  }
  getImg();
  }, []);
  
  const deleteImg = (id) => {
    log(id);
    axios.get(`https://ecomsamp.herokuapp.com/files/delete/${id}`).then((res) => {
      log(res);
      getImg();
    })
}
  return (
    <div>
      <div className='sliderContainer'>
        <div className='uploadImg'>
          <input ref={ref} type="file" onChange={(e) => setUploadImg(e.target.files[0])} />
          <button onClick={uploadImgHandler}>Upload</button>
        </div>
        <div className='deleteImg'>
          {
            imgData && imgData.map((item, index) => {
              return (
                <><div key={index} className='imageShowCase'>
                  <img src={`https://ecomsamp.herokuapp.com/files/${item.filename}`} height={100} width={150} alt='img' />
                  <button onClick={()=>deleteImg(item._id)}>Delete</button>
                </div></>
              )
            }
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Slider