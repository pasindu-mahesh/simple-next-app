interface params{
    params: {name: string};
}

export default function page({params}: any) {
    return(
        <main>
            {" "}
            {params.name}
        </main>
    );
}