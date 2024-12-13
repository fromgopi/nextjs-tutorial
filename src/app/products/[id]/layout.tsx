
const ProductLayout  = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            {children}
            <div>
                <h1>Featured Product section</h1>
            </div>
        </div>
    )
}

export default ProductLayout;