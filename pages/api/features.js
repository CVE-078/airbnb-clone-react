import featuresData from '/lib/features.json'

export default function featuresAPI(req, res) {

    if (req.method == 'GET') {
        res.status(200).json(featuresData);
    }

}