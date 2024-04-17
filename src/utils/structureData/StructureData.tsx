import Head from 'next/head'
import Script from 'next/script'
import { WithContext, Thing } from 'schema-dts'

interface Props {
    data: WithContext<Thing>
}

export default function StructuredData({ data }: Props) {
    return (
        <head>
            <script
                id="webPage"
                key="structured-data"
                type="application/ld+json"
                // eslint-disable-next-line @typescript-eslint/naming-convention
                dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            />
        </head>
    )
}
