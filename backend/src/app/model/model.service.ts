// import { Injectable } from '@nestjs/common';
// import * as path from 'path';
// import * as childProcess from 'child_process';

// @Injectable()
// export class ModelService {
//   async getPredictions(inputHours: string): Promise<any> {
//     const pythonScriptPath = path.join('C:\\Users\\palal oza\\OneDrive\\Desktop\\BE_project_repo\\be-project-repo\\backend\\assets', 'model.py');
//     const pythonProcess = childProcess.spawn('python', [pythonScriptPath, inputHours]);
//     let predictions = '';

//     pythonProcess.stdout.on('data', (data) => {
//       predictions += data.toString();
//     });

//     pythonProcess.stderr.on('data', (data) => {
//       console.error(`Error from Python script: ${data}`);
//     });

//     return new Promise((resolve, reject) => {
//       pythonProcess.on('close', (code) => {
//         if (code === 0) {
//           resolve(predictions);
//           console.log(predictions)
//         } else {
//           reject(`Python script exited with code ${code}`);
//         }
//       });
//     });
//   }
// }

// import { Injectable } from '@nestjs/common';
// import * as path from 'path';
// import * as childProcess from 'child_process';

// @Injectable()
// export class ModelService {
//   async getPredictions(inputHours: string): Promise<any> {
//     const pythonScriptPath = path.join('backend\\assets', 'model.py');
//     const pythonProcess = childProcess.spawn('python', [pythonScriptPath, inputHours]);
//     let predictions = '';

//     pythonProcess.stdout.on('data', (data) => {
//       predictions += data.toString();
//     });

//     pythonProcess.stderr.on('data', (data) => {
//       console.error(`Error from Python script: ${data}`);
//     });

//     return new Promise((resolve, reject) => {
//       pythonProcess.on('close', (code) => {
//         if (code === 0) {
//           resolve(predictions); // Trim whitespace from predictions
//         } else {
//           reject(`Python script exited with code ${code}`);
//         }
//       });
//     });
//   }
// }


// import { Injectable } from '@nestjs/common';
// import * as path from 'path';
// import * as childProcess from 'child_process';

// @Injectable()
// export class ModelService {
//   async getPredictions(inputHours: string): Promise<any[]> {
//     const pythonScriptPath = path.join('backend\\assets', 'model.py');
//     const pythonProcess = childProcess.spawn('python', [pythonScriptPath, inputHours]);
//     let predictions: any[] = [];

//     pythonProcess.stdout.on('data', (data) => {
//       // const jsonData = JSON.parse(data.toString()); // Assuming the data is in JSON format
//       predictions.push(data); // Assuming jsonData is an array of predictions
//     });

//     pythonProcess.stderr.on('data', (data) => {
//       console.error(`Error from Python script: ${data}`);
//     });

//     return new Promise((resolve, reject) => {
//       pythonProcess.on('close', (code) => {
//         if (code === 0) {
//           resolve(predictions);
//         } else {
//           reject(`Python script exited with code ${code}`);
//         }
//       });
//     });
//   }
// }




// prediction.service.ts
import { Injectable } from '@nestjs/common';
import { PythonShell } from 'python-shell';

@Injectable()
export class ModelService {
  async getPredictions(hours: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      // Path to your Python script
      const scriptPath = 'backend/assets/model.py';
      
      // Configure PythonShell
      const pyshell = new PythonShell(scriptPath);

      // Send hours as an argument to the Python script
      pyshell.send(hours);

      // Collect data from Python script
      pyshell.on('message', (message) => {
        const predictions = JSON.parse(message);
        resolve(predictions);
      });

      // Handle errors
      pyshell.on('error', (error) => {
        reject(error);
      });
    });
  }
}
