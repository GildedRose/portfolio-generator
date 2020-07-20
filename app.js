const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// print each command-line argument one at a time
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }
    console.log('================');
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);
