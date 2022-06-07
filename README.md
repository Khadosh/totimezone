
# toTimeZone

creates a date with time on a determinated timezone
## How To Use

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data` | `object` | **Required**.  |

| data Elements | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `date` | `date` | **Required** ex. `new Date()`| 
| `tz` | `string` | **Required** timezone ex. `'America/Los_Angeles'`| 
| `hours` | `int` | **Required** ex. `8`| 
| `minutes` | `int` | **Required** ex. `0`| 
| `seconds` | `int` | **Required** ex. `0`| 
 
#### Example
toTimeZone({
  date: new Date(),
  tz: "America/New_York",
  hours: 8,
  minutes: 0,
  seconds: 0
});


## Authors

- [@khadosh](https://github.com/Khadosh)

