
const dataContainer = document.getElementById("data");
function show(arg) {
    let kod = `<div class="flex justify-center gap-[190px] items-center my-6">
                <p class="text-3xl"><b>Patients</b></p>
                <img src="/img/search_FILL0_wght300_GRAD0_opsz24@2x.png" class="h-6" alt="">
            </div>`;

    arg.forEach((item, index) => {
        kod += `
            <div onclick="selectPatients(${index})" 
                class="customslist cursor-pointer flex justify-between items-center p-2 m-3 rounded-[10px]">
                <div id="name" class="flex items-center">
                    <img src="${item.profile_picture}" class="h-13 w-13 rounded-full mr-3" alt="${item.name}">
                    <div>
                        <p class="font-bold">${item.name}</p>
                        <p>${item.gender} ${item.age} </p>
                    </div>
                </div>
                <span class="rounded-[25px] px-3 py-1"> </span>
            </div>
        `;
    });

    dataContainer.innerHTML = kod;
}

const profile = document.getElementById("data3");

function selectPatients(index) {
    let arg = data[index];
    let kodd = `
    <div class="m-auto">
    <div class="m-auto">
        <img src="${arg.profile_picture}" class="h-24 w-24 rounded-full" alt="${arg.name}">
        <h3 class="text-2xl font-bold">${arg.name}</h3>
</div>
        <div class="flex gap-4 items-center py-3">
            <div><img src="/img/BirthIcon.svg" alt=""></div>
            <div>
                <p>Gender</p>
                <p><b>${arg.gender}</b></p>
            </div>
        </div>

        <div class="flex gap-4 items-center py-3">
            <div><img src="/img/FemaleIcon.svg" alt=""></div>
            <div>
                <p>Date of birth</p>
                <p><b>${arg.date_of_birth}</b></p>
            </div>
        </div>

        <div class="flex gap-4 items-center py-3">
            <div><img src="/img/PhoneIcon.svg" alt=""></div>
            <div>
                <p>Phone number</p>
                <p><b>${arg.phone_number}</b></p>
            </div>
        </div>

        <div class="flex gap-4 items-center py-3">
            <div><img src="/img/PhoneIcon.svg" alt=""></div>
            <div>
                <p>Emergency contact</p>
                <p><b>${arg.emergency_contact}</b></p>
            </div>
        </div>

        <div class="flex gap-4 items-center py-3">
            <div><img src="/img/InsuranceIcon.svg" alt=""></div>
            <div>
                <p>Insurance type</p>
                <p><b>${arg.insurance_type}</b></p>
            </div>
        </div>
        <button class="bg-[#01F0D0] rounded-4xl p-3 font-bold ">Show more information</button>
        </div>
    `
    profile.innerHTML = kodd;
    

    const about = document.getElementById('data2');

    let koddd = `
            <p class=""font-bold" size-5">Diagnosis History</p>
        <table>
            <tr class="text-left bg-[#f6f7f8]">
                <th>Problem/Diagnosis</th>
                <th>Description</th>
                <th>Status</th>
            </tr>
    `;

    arg.diagnostic_list.forEach((item) => {
        koddd += `
            <tr class="p-2 border-b-2 border-solid border-[#f6f7f8]">
                <td class="w-[300px] p-3">${item.name}</td>
                <td class="w-[300px] p-3">${item.description}</td>
                <td class="w-[300px] p-3">${item.status}</td>
            </tr>
        `;
    });

    koddd += `</table>`;

    about.innerHTML = koddd;

    const disease=document.getElementById('data4');
      
    let kodddd = `<h3 class="font-bold">Lab Result</h3>`;

    arg.lab_results.forEach((item, index) => {
        kodddd += `
        <div class="flex justify-between mt-5">
           <div>${item}</div>   <div class="w-6 h-6"><img src="img/dow.png"></div>
           </div>
        `;
    });

    disease.innerHTML = kodddd;

    // const list = document.getElementById('list');
    // let myChart = null;
    // let kod = '';

    // people.forEach((elm, i) => {
    //     kod += `<p onclick='selectPatients(${i})'>${elm.name}</p>`;
    // });
    // list.innerHTML = kod;

//     function selectPatients(i) {
//         if (myChart) {
//             myChart.destroy();
//         }

//         let person = data[i];
//         let newResult = person.diagnosis_history.map(item => item.heart_rate.value);
//         diagram(newResult);
//     }

//     function diagram(result) {
//         const labels = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul'];
//         const data = {
//             labels: labels,
//             datasets: [
//                 {
//                     label: 'Dataset 1',
//                     data: result,
//                     fill: false,
//                     borderColor: '#8C6FE6',
//                     tension: 0.3,
//                     pointBackgroundColor: '#8C6FE6',
//                     pointRadius: 6,
//                     pointHoverRadius: 8,
//                 },
//                 {
//                     label: 'Dataset 2',
//                     data: [23, 49, 11, 85, 56, 34, 40],
//                     fill: false,
//                     pointHoverRadius: 8,
//                     pointBackgroundColor: '#E66FD2',
//                     borderColor: '#E66FD2',
//                     pointRadius: 6,
//                     tension: 0.3
//                 }
//             ]
//         };

//         const config = {
//             type: 'line',
//             data: data,
//             options: {
//                 plugins: {
//                     legend: {
//                         display: false
//                     },
//                 }
//             }
//         };

//         const ctx = document.getElementById('canvas').getContext('2d');
//         myChart = new Chart(ctx, config);
//     }

//     diagram([65, 59, 80, 81, 56, 55, 40]);

            // const one=document.getElementById("one");
            // const two=document.getElementById("two");
            // const three=document.getElementById("three");

            // let kod5=`  <img src="img/respiratory rate.svg" class="m-6" alt="">
            //     <p class="font-bold text-2xl m-2">Respiratory rate</p>
            //     `;
            // let kod6=` <img src="img/temperature.svg" class="m-6" alt="">
            //     <p class="font-bold text-2xl m-2">Temperature</p>
            //     `;
            // let kod7=`<img src="img/HeartBPM.svg" class="m-6" alt="">
            //     <p class="font-bold text-2xl m-2">Heart rate</p>
            //     `;

            // arg.diagnosis_history.forEach((item) => {
            //     kod5 += `
            //     <h2>${item.respiratory_rate.value}bpm</h2>
            //     <p>${item.respiratory_rate.levels}</p>
            //     `;
            //     kod6 += `
            //     <h2>${item.temperature.value}bpm</h2>
            //     <p>${item.temperature.levels}</p>
            //     `;
            //     kod7 += `
            //     <h2>${item.heart_rate.value}bpm</h2>
            //     <p>${item.heart_rate.levels}</p>
            //     `;

            // });
            //  one.innerHTML=kod5;
            //  two.innerHTML=kod6;
            //  three.innerHTML=kod7;
   
            const one=document.getElementById("one");
            const two=document.getElementById("two");
            const three=document.getElementById("three");
            let arg1 = data[index].diagnosis_history;
            let firstDiagnosis = arg1[0];

            let kod5=`  <img src="img/respiratory rate.svg" class="m-6" alt="">
                <p class="font-bold text-2xl m-2">Respiratory rate</p>
                 <h2 class="font-bold text-3xl m-3">${firstDiagnosis.respiratory_rate.value}bpm</h2>
                <p class="m-4">${firstDiagnosis.respiratory_rate.levels}</p>`

            let kod6=` <img src="img/temperature.svg" class="m-6" alt="">
                <p class="font-bold text-2xl m-2 ">Temperature</p>
                  <h2 class="font-bold text-3xl m-3">${firstDiagnosis.temperature.value}*F</h2>
                <p class="m-4">${firstDiagnosis.temperature.levels}</p>`;


            let kod7=`<img src="img/HeartBPM.svg" class="m-6" alt="">
                <p class="font-bold text-2xl m-2">Heart rate</p>
                <h2 class="font-bold text-3xl m-3">${firstDiagnosis.heart_rate.value}bpm</h2>
                <p class="m-4">${firstDiagnosis.heart_rate.levels}</p>`;

             one.innerHTML=kod5;
             two.innerHTML=kod6;
             three.innerHTML=kod7;
            };
    show(data);

