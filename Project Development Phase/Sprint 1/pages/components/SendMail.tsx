import React from 'react'

const SendMail = () => {
  return (
    <div style={{
        width:'90%',
        margin:'0 auto',
        marginBottom:'100px',
        marginTop:'50px'
    }}>
            <h1 style={{color:'#777',fontFamily:'monospace'}}>Request for stock</h1>

            <div style={{fontFamily:'monospace'}}>
                <div style={{width:'440px',display:'flex',flexDirection:'column',justifyContent:'space-between',marginBottom:'1rem'}}>
                <label htmlFor='email' style={{fontSize:'1rem',marginBottom:'0.5rem'}}>Email</label>
                <input type='email' style={{width:'100%',borderRadius:'5px',outline:'none',border:'1px solid #0f83ab',padding:'0.5rem 1rem'}}/>
                </div>

                <div style={{width:'440px',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                <label htmlFor='email' style={{fontSize:'1rem',marginBottom:'0.5rem'}} >Content</label>
                <textarea name="email" style={{width:'100%',borderRadius:'5px',outline:'none',border:'1px solid #0f83ab',padding:'0.5rem 1rem'}} id="email"></textarea>
                </div>
            </div>

    </div>
  )
}

export default SendMail