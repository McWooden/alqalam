import { Menu } from "../Utils"
import MyMarkdown from "../MyMarkdown"

export default function Akidah() {
    const menuList = [
        {title: 'Tema 1: Rukun Iman', path: '/app/ilmu/akidah/rukun-iman'},
    ]
    return <Menu items={menuList}/>
}

export function RukunIman() {
    const myContent = (
`
# Rukun Iman

Rukun iman adalah segala sesuatu yang harus dipercaya oleh orang Islam. Rukun iman terdiri dari 6 hal yaitu:\n

1. Iman kepada Allah  
2. Iman kepada malaikat  
3. Iman kepada kitab  
4. Iman kepada Rasul  
5. Iman kepada hari kiamat  
6. Iman kepada qada dan qadar  

Catatan:  

1. Iman berarti percaya dengan maksimal  
2. Qada dan qadar berarti ketetapan atau takdir dari Allah
`)

    return <div className="max-w-[80rem]">
        <MyMarkdown content={myContent}/>
    </div>
}