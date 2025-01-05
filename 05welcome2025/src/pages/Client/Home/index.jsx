import React from 'react'
import styles from './index.module.scss'
const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Farid Shahmursoy</h1>
        <p className={styles.subtitle}>Discover the Best in Electronics</p>
      </header>
      <section className={styles.products}>
        <div className={styles.productCard}>
          <img
            src="https://i.ytimg.com/vi/cJKQdzopuco/maxresdefault.jpg"
            alt="Smartphone"
            className={styles.productImage}
          />
          <h3 className={styles.productTitle}>Smartphones</h3>
          <p className={styles.productDescription}>Latest technology in your hands.</p>
        </div>
        <div className={styles.productCard}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfUrTMlZjzQncknnLg3XoHhlSKsKy7ajVGw&s"
            alt="Laptop"
            className={styles.productImage}
          />
          <h3 className={styles.productTitle}>Laptops</h3>
          <p className={styles.productDescription}>Powerful and portable devices.</p>
        </div>
        <div className={styles.productCard}>
          <img
            src="https://media.istockphoto.com/id/1395567847/photo/girl-in-an-oversized-hoodie-wearing-wireless-headphones-face-in-profile-neon-pink-and-blue.jpg?s=612x612&w=0&k=20&c=cagKxGtgvCjAf9X3aLMR8ddeaiGlw6Je28htzSoNR0A="
            alt="Headphones"
            className={styles.productImage}
          />
          <h3 className={styles.productTitle}>Headphones</h3>
          <p className={styles.productDescription}>Immersive sound experience.</p>
        </div>
      </section>
    </div>
  )
}

export default Home
