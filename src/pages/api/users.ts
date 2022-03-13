import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Caique'},
    { id: 2, name: 'Caique2'},
    { id: 3, name: 'Caique3'},
  ]

  return response.json(users);
}
