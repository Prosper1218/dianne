import React from 'react'
import './Dif.css'
import { Grid, SimpleGrid } from '@mantine/core'
import '@mantine/core/styles.css';
import { motion } from 'framer-motion';

const Difference = () => {

    const contents = [

        {
            id: 1,
            title: "Experience",
            content: "With over ten years of experience in online therapy, I have honed my ability to connect with my clients and provide personalized care."
        },
        {
            id: 2,
            title: "Flexibility",
            content: "I offer online therapy sessions for clients to receive care in a comfortable and secure environment from their home or workplace."
        },
        {
            id: 3,
            title: "Client-centered",
            content: "I focus on the unique needs and goals of each client and use evidence-based therapeutic approaches to help my clients achieve their goals."
        },
        {
            id: 4,
            title: "Affordable",
            content: "I offer online therapy sessions for clients to receive care in a comfortable and secure environment from their home or workplace."
        },

    ]

    return (
        <div id='background'>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
            >
                <div id='h2-container'>   <h2>what makes me different</h2></div>
                <Grid justify='center' className='px-6 sm:px-8 py-8'>
                    {
                        contents.map((item) => {
                            const { id, title, content } = item
                            return <Grid.Col key={id} span={{ base: 12, sm: 5.7, lg: 2.5 }} className='box'>
                                <h5>{title}</h5>
                                <p style={{ fontSize: "medium" }}>{content}</p>
                            </Grid.Col>
                        })
                    }
                </Grid>
                <br />

            </motion.div>

        </div >
    )
}

export default Difference


