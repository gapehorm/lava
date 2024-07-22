// app/page.tsx (Server Component)
import React from 'react';
import { createClient, gql } from 'urql';
import { cacheExchange, fetchExchange } from '@urql/core';

const client = createClient({
  url: 'https://api.studio.thegraph.com/query/81859/dragon/version/latest',
  exchanges: [cacheExchange, fetchExchange],
});

const DATA_QUERY = gql`
  {
    transfers(first: 1000, skip: 0, where: { to: "0x000000000000000000000000000000000000dEaD" }) {
      value
      id
    }
  }
`;

export async function ComponentExample() {
  const result = await client.query(DATA_QUERY).toPromise();

  if (result.error) {
    return (
      <div className='bg text-center relative h-[100vh]'>
        <p className='text-3xl  text-[#fff] font-bold absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 '>Error: {result.error.message}</p>
      </div>
    );
  }

  const data = result.data;
  if (!data || !data.transfers || data.transfers.length === 0) {
    return (
      <div className='bg text-center relative h-[100vh]' >
        <p className='text-3xl  text-[#fff] font-bold absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 '>No data found

        </p>
      </div>
    );
  }

  // Calculate total burnt amount
  const totalBurnt = data.transfers.reduce((acc: bigint, transfer: { value: string }) => {
    return acc + BigInt(transfer.value);
  }, BigInt(0));

  return (
    <div className='bg text-center relative h-[100vh]'>
      <div className='flex flex-col text-3xl  text-[#fff] font-bold absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 '>
        <h1 className='text-3xl'>Total LP Burnt: {totalBurnt.toString()}</h1>
      </div>

    </div>
  );
}

export default ComponentExample;
