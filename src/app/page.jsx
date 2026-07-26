import Button from '@/components/Button';
import Card from '@/components/Card';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl text-center font-bold my-5'>
        Home Page</h1>
        <div className='grid grid-cols-3 gap-3'>
          <Card title={'My Card title'}
            description={'This is a simple card with a title and description.'}
            btnText={'Click Me'}
          />
          <Card title={'Another Card'}
            description={'This is another card with different content.'}
            btnText={'Learn More'}
          />
          <Card title={'Yet Another Card'}
            description={'This is yet another card with unique content.'}
            btnText={'Get Started'}
          />
        </div>
        <Button title={'Click Me'} onClick={()=>{alert('Button Clicked')}}/>
      
    
      
    </div>
  )
}

export default Home;