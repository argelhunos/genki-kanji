import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <div id="error-page">
            <img src="src/assets/img/internet_404_page_not_found.png" alt="404 Not Found" />
            <h1>Whoops!</h1>
            <p>An unexpected error has occured.</p>
            <p>
                <em>{error.statusText || error.message}</em>
            </p>
        </div>
    )
}