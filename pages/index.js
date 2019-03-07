import Link from 'next/link'

const Index = () => (
    <div>
        <Link href="/about"><a style={styles.links}>About</a></Link>
        <button>go here</button>
        <p>Hello Next.js</p>
    </div>
)

const styles = {
    links: {
        fontSize:50
    }
}
export default Index