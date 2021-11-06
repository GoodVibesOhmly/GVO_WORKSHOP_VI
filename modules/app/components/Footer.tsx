import Link from 'next/link'

export function Footer() {
  return (
    <div>
      <div className="footer">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter account"
        >
          Twitter
        </a>

       

        <a
          title="Join discord"
          href="https://discord.gg/xx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join our Discord
        </a>

     

      </div>
      <div style={{ padding: '30px', textAlign: 'center'}}>
        2021 - NFT Alliance
      </div>
      <style jsx>
        {`
          .footer {
            width: 100%;
            height: 100px;
            margin-top: 30px;
            padding: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }

          .footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            color: white;
            text-transform: uppercase;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
}