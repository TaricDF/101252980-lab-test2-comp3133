export class Mission {
    flight_number: number
    mission_name: string
    launch_year: string
    launch_date_utc: string
    rocket:{
        rocket_id: string
        rocket_name: string
        rocket_type: string
        first_stage:{
            cores:[{
                core_serial: string
                flight: number
                land_success: boolean
                landing_type: string
                landing_vehicle: string
            }]
        }
        second_stage:{
            payloads:[{
                payload_id: string
                customers: [string]
                nationality: string
                manufacturer: string
                payload_type: string
                payload_mass_kg: number
                payload_mass_lbs: number
                orbit: string
            }]
        }
    }
    launch_site:{
        site_id: string
        site_name: string
        site_name_long: string
    }
    launch_success: boolean
    links:{
        mission_patch: string
        mission_patch_small: string
        reddit_campaign: string
        reddit_launch: string
        reddit_recovery: string
        reddit_media: string
        presskit: string
        article_link: string
        wikipedia: string
        video_link: string
        youtube_id: string
        flickr_images: [string]
    }
    details: string

    constructor(
        flight_number: number,
        mission_name: string,
        launch_year: string,
        launch_date_utc: string,
        rocket:{
            rocket_id: string,
            rocket_name: string,
            rocket_type: string,
            first_stage:{
                cores:[{
                    core_serial: string,
                    flight: number,
                    land_success: boolean,
                    landing_intent: boolean,
                    landing_type: string,
                    landing_vehicle: string
                }]
            },
            second_stage:{
                payloads:[{
                    payload_id: string,
                    customers: [string],
                    nationality: string,
                    manufacturer: string,
                    payload_type: string,
                    payload_mass_kg: number,
                    payload_mass_lbs: number,
                    orbit: string
                }]
            }
        },
        launch_site:{
            site_id: string,
            site_name: string,
            site_name_long: string
        },
        launch_success: boolean,
        links:{
            mission_patch: string,
            mission_patch_small: string,
            reddit_campaign: string,
            reddit_launch: string,
            reddit_recovery: string,
            reddit_media: string,
            presskit: string,
            article_link: string,
            wikipedia: string,
            video_link: string,
            youtube_id: string,
            flickr_images: [string]
        },
        details: string
    ) {
        this.flight_number = flight_number
        this.mission_name = mission_name
        this.launch_year = launch_year
        this.launch_date_utc = launch_date_utc
        this.rocket = rocket
        this.launch_site = launch_site
        this.launch_success = launch_success
        this.links = links
        this.details = details
    }
}