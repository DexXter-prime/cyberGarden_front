import axios from "axios";

class StationController {
    static link = 'http://localhost:3000/api/station/list/'
    static async getStation(id) {
        return await axios.get(this.link + id)
    }
}

export default StationController