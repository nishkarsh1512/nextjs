import { MongoClient } from 'mongodb'

import MeetupList from '../components/meetups/MeetupList'

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://nish:nish@nextjs.v8hodpg.mongodb.net/?retryWrites=true&w=majority',
  )
  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  }
}

export default HomePage

// import MeetUpList from '../components/meetups/MeetUpList'
// import React, { useEffect, useState } from 'react'
// const DUMMY_MEETS = [
//   {
//     id: 'm1',
//     title: 'A first meetup',
//     image:
//       'https://cdn.pixabay.com/photo/2023/03/18/16/26/ha-giang-7860907_960_720.jpg',
//     address: 'Street 10, home',
//     description: 'This is a first meetup',
//   },
// ]

// function HomePage(props) {
//   // const [loadedMeetups, setLoadedMeetups] = useState([])

//   // useEffect(() => {
//   //   setLoadedMeetups(DUMMY_MEETS)
//   // }, [])
//   return (
//     <>
//       <MeetUpList meetups={props.meetups}></MeetUpList>
//     </>
//   )
// }
// ////UPDATES DYNAMICALLY
// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETS,
//     },
//   }
// }

// //execute during build process
// // export async function getStaticProps() {
// //   //fetch data from api
// //   //return object only
// //   return {
// //     props: {
// //       meetups: DUMMY_MEETS,
// //     },
// //     revalidate: 10,
// //   }
// // }

// export default HomePage
