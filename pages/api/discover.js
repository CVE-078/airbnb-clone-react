import discoverData from '/lib/discover.json'

export default function discoverAPI(req, res) {

    if (req.method == 'GET') {
        res.status(200).json(discoverData);
    }

}
