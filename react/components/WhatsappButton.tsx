import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string // whatsapp.png
  phone: string
  message: string
  width: number
  height: number
}

const WhatsappButton = ({ logo, phone, message, height, width }: Props) => {
  const formattedMessage = message.replace(/ /g, '%20')

  console.log('El mensaje formateado es', formattedMessage, logo)

  return (
    <>
      <div className="fixed bottom-2 right-2 flex flexColumn">
        <a
          href={`https://wa.me/${phone}?text=I'm%20interested%20in%20your%20car%20for%20sale`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={logo} height={height} width={width} alt="Logo de WA" />
        </a>
      </div>
    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'logo.png',
  phone: '3209805705',
  message: 'Hola, deja tu mensaje',
  height: 80,
  width: 80,
}

WhatsappButton.schema = {
  title: 'Boton de WA',
  type: 'object',
  properties: {
    logo: {
      title: 'logo de WA relacionado con la marca',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
      phone: {
        title: 'Telefono',
        description: 'Agrega un numero de telefono',
        type: 'string',
      },

      message: {
        title: 'Mensaje',
        description: 'Deja tu mensaje personalizado',
        type: 'string',
        widget: {
          'ui:widget': 'textarea',
        },
      },

      width: {
        title: 'width',
        type: 'number',
      },
      height: {
        title: 'height',
        type: 'number',
      },
    },
  },
}

export default WhatsappButton
