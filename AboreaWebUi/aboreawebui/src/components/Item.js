import React from 'react'

const items = [
    {
        id: 1,
        name: 'Bier',
        weight: 0.5,
        price: '1 MU',
        function: 'Halber Liter Bier'
    },
    {
        id: 2,
        name: 'Cidre',
        weight: 1,
        price: '1 MU',
        function: '1 Liter Apfel-Cidre'
    },
    {
        id: 3,
        name: 'Fackel',
        weight: 0.1,
        price: '1 MU',
        function: 'Brennt 6 Stunden und erhellt 6 m Umkreis'
    },
    {
        id: 4,
        name: 'Federkiel und Tinte',
        weight: 0.1,
        price: '7 KL',
        function: 'Zum Schreiben mit Tinte'
    },
    
]

const Item = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Gewicht
                        </th>
                        <th>
                            Preis
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    {item.id} 
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.weight} kg
                                </td>
                                <td>
                                    {item.price}
                                </td>
                            </tr>
                        )
                    )}  
                </tbody>
            </table>
        </div>
    )
}

export default Item
