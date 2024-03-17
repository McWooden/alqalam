import { useNavigate } from "react-router-dom"

export default function ErrorPage() {
    const navigate = useNavigate()

    return <div className="flex flex-col gap-2 p-8 h-full justify-center items-center">
        <h1>404 Not found</h1>
        <p className="text-sm">Apakah kamu tersesat?</p>
        <div className="mt-auto">
            <div className="btn btn-primary text-xs" onClick={() => navigate('/')}>Klik untuk kembali ke halaman utama</div>
        </div>
    </div>
}