import axios from 'axios'
import type { AxiosResponse } from 'axios'
import type { Stats } from '../types/index.types'

// const API_URL = 'http://localhost:3000'
const API_URL = 'https://api.korvbox.xyz'

/* api call for platform stats */

export const getPlatformStats = async (): Promise<Stats> => {
    try {
        const response: AxiosResponse<Stats> = await axios.get(
            `${API_URL}/stats`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        return response.data;
    } catch (error) {
        console.error(`Failed to fetch platform stats: ${error}`)
        throw new Error(`Failed to fetch platform stats.`)
    }
}