import exploreData from '/lib/explore.json'

export default function exploreAPI(req, res) {

  if (req.method == 'GET') {
    res.status(200).json(exploreData);
  }

}
