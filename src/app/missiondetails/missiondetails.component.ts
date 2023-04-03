import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../models/Mission';
import { SpacexapiService } from '../network/spacexapi.service'

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  @Input()
  flight_Num!: number;
  
  mission: Mission = 
    {
      "flight_number":1,
      "mission_name":"FalconSat",
      "launch_year":"2006",
      "launch_date_utc":"2006-03-24T22:30:00.000Z",
      "rocket":{
        "rocket_id":"falcon1",
        "rocket_name":"Falcon 1",
        "rocket_type":"Merlin A",
        "first_stage":{
          "cores":[{
            "core_serial":"Merlin1A",
            "flight":1,
            "land_success":false,
            "landing_type":"",
            "landing_vehicle":""
          }]
        },
        "second_stage":{
          "payloads":[{
            "payload_id":"FalconSAT-2",
            "customers":["DARPA"],
            "nationality":"United States",
            "manufacturer":"SSTL",
            "payload_type":"Satellite",
            "payload_mass_kg":20,
            "payload_mass_lbs":43,
            "orbit":"LEO"
          }]
        }
      },
      "launch_site":{
        "site_id":"kwajalein_atoll",
        "site_name":"Kwajalein Atoll",
        "site_name_long":"Kwajalein Atoll Omelek Island"
      },
      "launch_success":false,
      "links":{
        "mission_patch":"https://images2.imgbox.com/40/e3/GypSkayF_o.png",
        "mission_patch_small":"https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
        "reddit_campaign":"",
        "reddit_launch":"",
        "reddit_recovery":"",
        "reddit_media":"",
        "presskit":"",
        "article_link":"https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
        "wikipedia":"https://en.wikipedia.org/wiki/DemoSat",
        "video_link":"https://www.youtube.com/watch?v=0a_00nJ_Y88",
        "youtube_id":"0a_00nJ_Y88",
        "flickr_images":[""]
      },
      "details":"Engine failure at 33 seconds and loss of vehicle"
    }
  constructor(private spacexapiService: SpacexapiService, private activatedRoute:ActivatedRoute) {}
  ngOnInit(): void {
    this.flight_Num = history.state.flight_Num
    this.spacexapiService.getMissionDetails(this.flight_Num)
      .subscribe({
        next: (res: any) => {
          this.mission = res
          console.log(this.mission)
        },
        complete: () => {
          console.log('Complete')
        },
        error:() => {
          console.log('Error')
        }
      })
  }
}
