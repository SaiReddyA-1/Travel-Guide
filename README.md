##Travel Guide

#### Making API call with Fetch

#### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/travel-guide-output.gif" alt="travel-guide-desktop-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Medium (Size >= 768px), Large (Size >= 992px), and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/travel-guide-lg-output.png)

</details>

### Setup Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality Implemented</summary>
<br/>
The Travel Guide now includes the following functionalities:

- Initiates an HTTP GET request to **travelGuidePackagesApiUrl** upon initial launch
- Displays a **<i>loader</i>** while fetching the data
- Successfully displays the list of packages upon a successful HTTP GET request

</details>

<details>
<summary>API Requests & Responses</summary>
<br/>

**travelGuidePackagesApiUrl**

**API**: `https://apis.ccbp.in/tg/packages`

**Method**: `GET`

**Description**:

Returns a response containing a list of packages

**Response**

```json

{
    "packages":[
        {
        "id":1,
        "name":"Best of Paris in 7 days tour",
        "image_url":"https://assets.ccbp.in/frontend/react-js/travel-guide/paris-img.png",
        "description":"Paris, France capital, is a major European city and a global centre for art, fashion, gastronomy, and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine."
        },
        ...
   ],
}

```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- Each package item's image should have an `alt` attribute set to the `name` value from its respective package object within the packages list
- Wrap the Loader component with an HTML container element and set the `data-testid` attribute to `loader`, as shown below

```jsx
<div data-testid="loader">
  <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
</div>
```

</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #eef4f7; width: 150px; padding: 10px; color: black">Hex: #eef4f7</div>
<div style="background-color: #334155; width: 150px; padding: 10px; color: white">Hex: #334155</div>
<div style="background-color: #52bbf0; width: 150px; padding: 10px; color: black">Hex: #52bbf0</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<br/>

</details>

<details>
<summary>Font Families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Do not alter the names of component folders, as these are referenced in the tests.
