import mock from '../mock'

const wallets = [
  {
    id: '1f2d47627ae826e6b7d442dcf45d5a08efa8ad13040a3af0bc148612',
    assets: [
      {
        hash: 'lovelace',
        ticker: 'ADA',
        amount: 1515829.82,
      },
      {
        hash: '7a920d21f8b6a7edbd8db5d30c36f009fa8ae9028698359697b8a34647ab7b17.ray',
        ticker: 'RAY',
        amount: 1000000,
      },
      {
        hash: '09fa8ae9028698359697b8a34647ab7b177a920d21f8b6a7edbd8db5d30c36f0.ergo',
        ticker: 'ERGO',
        amount: 500,
      },
    ],
    transactions: [
      {
        id: '59697b8a34647ab7b177a920d21f8b6a7edbd8db5d30c36f009fa8ae90286983',
        date: '12/06/2020, 08:04:12',
        type: 'receive',
        fee: 0.172761,
        assets: [
          {
            hash: 'lovelace',
            ticker: 'ADA',
            amount: 1515829.82,
          },
          {
            hash: '7a920d21f8b6a7edbd8db5d30c36f009fa8ae9028698359697b8a34647ab7b17.ray',
            ticker: 'RAY',
            amount: 1000000,
          },
          {
            hash: '09fa8ae9028698359697b8a34647ab7b177a920d21f8b6a7edbd8db5d30c36f0.egor',
            ticker: 'EGOR',
            amount: 500,
          },
        ],
      },
      {
        id: '8359698b6a7ed7b8a34647ab7b177a920d21fbd8db5d30c36f009fa8ae902869',
        date: '12/06/2020, 12:08:43',
        type: 'send',
        fee: 0.172761,
        assets: [
          {
            hash: 'lovelace',
            ticker: 'ADA',
            amount: 4.12,
          },
        ],
      },
      {
        id: 'bd8db5d30c36f009fa8ae9028698359697b8a34647ab7b177a920d21f8b6a7ed',
        date: '12/06/2020, 14:14:40',
        type: 'send',
        amount: 2.180285,
        fee: 0.172761,
        assets: [
          {
            hash: 'lovelace',
            ticker: 'ADA',
            amount: 2.180285,
          },
        ],
      },
    ],
    addresses: [
      'addr1q856yfy7yfc7hv2p8prx4djyu7wmnj3v36ez8eexrupvyugzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqyax9sc',
      'addr1q9mnyfthe60zztues86x2halq8ngjpwjmwq5s4ec9uy458szyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqf2n58t',
      'addr1q9f5vt678heeurvayayt82wqt9xzcs360t3ktxqvhtq9s0szyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqh8e66e',
      'addr1qx88t9jr0pfnpyjh4z6ewd9uxhtvagele6p38d90tzrnf2gzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kq8gycvl',
      'addr1qx8kvkqx2tug8ajy63z5qfn7q35xm864mwxffkrd02ahrtqzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqldcpj4',
      'addr1q856yfy7yfc7hv2p8prx4djyu7wmnj3v36ez8eexrupvyugzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqyax9sc',
      'addr1q9mnyfthe60zztues86x2halq8ngjpwjmwq5s4ec9uy458szyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqf2n58t',
      'addr1q9f5vt678heeurvayayt82wqt9xzcs360t3ktxqvhtq9s0szyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqh8e66e',
      'addr1qx88t9jr0pfnpyjh4z6ewd9uxhtvagele6p38d90tzrnf2gzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kq8gycvl',
      'addr1qx8kvkqx2tug8ajy63z5qfn7q35xm864mwxffkrd02ahrtqzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqldcpj4',
      'addr1q856yfy7yfc7hv2p8prx4djyu7wmnj3v36ez8eexrupvyugzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqyax9sc',
      'addr1q9mnyfthe60zztues86x2halq8ngjpwjmwq5s4ec9uy458szyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqf2n58t',
      'addr1q9f5vt678heeurvayayt82wqt9xzcs360t3ktxqvhtq9s0szyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqh8e66e',
      'addr1qx88t9jr0pfnpyjh4z6ewd9uxhtvagele6p38d90tzrnf2gzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kq8gycvl',
      'addr1qx8kvkqx2tug8ajy63z5qfn7q35xm864mwxffkrd02ahrtqzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqldcpj4',
      'addr1q856yfy7yfc7hv2p8prx4djyu7wmnj3v36ez8eexrupvyugzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqyax9sc',
      'addr1q9mnyfthe60zztues86x2halq8ngjpwjmwq5s4ec9uy458szyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqf2n58t',
      'addr1q9f5vt678heeurvayayt82wqt9xzcs360t3ktxqvhtq9s0szyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqh8e66e',
      'addr1qx88t9jr0pfnpyjh4z6ewd9uxhtvagele6p38d90tzrnf2gzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kq8gycvl',
      'addr1qx8kvkqx2tug8ajy63z5qfn7q35xm864mwxffkrd02ahrtqzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqldcpj4',
    ],
    created: 1611210700730,
  },
  {
    id: '17627ae826e6b7d442dcf45d5a08c148612efa8ad13040a3af0b1f2d',
    assets: [
      {
        hash: 'lovelace',
        ticker: 'ADA',
        amount: 10020.82,
      },
    ],
    transactions: [],
    addresses: [
      'addr1q856yfy7yfc7hv2p8prx4djyu7wmnj3v36ez8eexrupvyugzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqyax9sc',
      'addr1q9mnyfthe60zztues86x2halq8ngjpwjmwq5s4ec9uy458szyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqf2n58t',
      'addr1q9f5vt678heeurvayayt82wqt9xzcs360t3ktxqvhtq9s0szyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqh8e66e',
      'addr1qx88t9jr0pfnpyjh4z6ewd9uxhtvagele6p38d90tzrnf2gzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kq8gycvl',
      'addr1qx8kvkqx2tug8ajy63z5qfn7q35xm864mwxffkrd02ahrtqzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqldcpj4',
      'addr1q856yfy7yfc7hv2p8prx4djyu7wmnj3v36ez8eexrupvyugzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqyax9sc',
      'addr1q9mnyfthe60zztues86x2halq8ngjpwjmwq5s4ec9uy458szyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqf2n58t',
      'addr1q9f5vt678heeurvayayt82wqt9xzcs360t3ktxqvhtq9s0szyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqh8e66e',
      'addr1qx88t9jr0pfnpyjh4z6ewd9uxhtvagele6p38d90tzrnf2gzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kq8gycvl',
      'addr1qx8kvkqx2tug8ajy63z5qfn7q35xm864mwxffkrd02ahrtqzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqldcpj4',
      'addr1q856yfy7yfc7hv2p8prx4djyu7wmnj3v36ez8eexrupvyugzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqyax9sc',
      'addr1q9mnyfthe60zztues86x2halq8ngjpwjmwq5s4ec9uy458szyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqf2n58t',
      'addr1q9f5vt678heeurvayayt82wqt9xzcs360t3ktxqvhtq9s0szyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqh8e66e',
      'addr1qx88t9jr0pfnpyjh4z6ewd9uxhtvagele6p38d90tzrnf2gzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kq8gycvl',
      'addr1qx8kvkqx2tug8ajy63z5qfn7q35xm864mwxffkrd02ahrtqzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqldcpj4',
      'addr1q856yfy7yfc7hv2p8prx4djyu7wmnj3v36ez8eexrupvyugzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqyax9sc',
      'addr1q9mnyfthe60zztues86x2halq8ngjpwjmwq5s4ec9uy458szyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqf2n58t',
      'addr1q9f5vt678heeurvayayt82wqt9xzcs360t3ktxqvhtq9s0szyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqh8e66e',
      'addr1qx88t9jr0pfnpyjh4z6ewd9uxhtvagele6p38d90tzrnf2gzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kq8gycvl',
      'addr1qx8kvkqx2tug8ajy63z5qfn7q35xm864mwxffkrd02ahrtqzyu8ye3d6u3f30g2mn2r02rjkc9uzsz3et2ykhvgjy0kqldcpj4',
    ],
    created: 1611218700730,
  },
]

mock.onPost('/api/wallet').reply((request) => {
  const { id } = JSON.parse(request.data)
  const wallet = wallets.find((item) => item.id === id)

  return wallet
    ? [200, wallet]
    : [200, {
      ...wallets[0],
      id,
      assets: [
        {
          hash: 'lovelace',
          ticker: 'ADA',
          amount: Math.floor(Math.random() * 1000) + 1,
        },
        {
          hash: '7a920d21f8b6a7edbd8db5d30c36f009fa8ae9028698359697b8a34647ab7b17.ray',
          ticker: 'RAY',
          amount: Math.floor(Math.random() * 1000) + 1,
        },
      ]
    }]

  // return [404, 'Something went wrong.']
})
