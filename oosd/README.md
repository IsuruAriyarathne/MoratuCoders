Goto settings and change database configerations before run the server.
If you are using nodemon to start the server use "nomdemon run start" command.
------------------------------------------------------------------------------------------------
Can use these endpoints to interact with employee_table
    1. GET  - get list of employees     - localhost:8000/employees
    2. GET  - get details of an emp     - localhost:8000/employees?id=123&type=json
    3. GET  - check emp_id is available - localhost:8000/employees?id=123&type=status
    4. POST - Add employee              - localhost:8000/employees
        body -  {
                    "employee_id"   : //id,             --int
                    "salary_id"     : //sal_id,         --int
                    "name"          : //name,           --str
                    "dob"           : //YYYY-MM-DD,   --str
                    "employee_type" : //1/2/3/4,      --int
                    "gender"        : //M/F           --str
                }
    5. PUT - update an employee details - localhost:8000/employees
        body -  {
                    "employee_id"   : //id,             --int
                    "salary_id"     : //sal_id,         --int
                    "name"          : //name,           --str
                    "dob"           : //YYYY-MM-DD,     --str
                    "employee_type" : //1/2/3/4,        --int
                    "gender"        : //M/F             --str
                }
    6. DELETE- delete an employee       - localhost:8000/employees
         body - {
                    "employee_id"   : //id,             --int
                }
------------------------------------------------------------------------------------------------
Can use these endpoints to interact with daily_attendance
    1. GET  - get attendance list       - localhost:8000/attendance
    2. GET  - get attendance by date    - localhost:8000/attendance?date=2020-01-01
    3. GET  - get attendance of a div by date - localhost:8000/attendance?date=2020-01-01&div=2
    4. POST - Add employee attendance   - localhost:8000/attendance
        body -  [
                    {
                        "date"          : "2020-05-30",     --str
                        "division"      : 1,                --int 
                        "employee_id"   : 31,               --int
                        "method"        : 1                 --int
                    },
                    {
                        "date"          : "2020-05-30",     --str
                        "division"      : 1,                --int 
                        "employee_id"   : 31,               --int
                        "method"        : 1                 --int
                    } .....
                ]
    5. PUT - update an employee details - localhost:8000/attendance
        body -  {
                    "date"          : "2020-05-30",     --str
                    "division"      : 1,                --int 
                    "employee_id"   :31,                --int
                    "method"        :1                  --int
                }
    6. DELETE- delete an employee       - localhost:8000/attendance
         body - {
                    "date"          : //YYYY-MM-DD,     --str
                    "employee_id    : //id              --int
                }
------------------------------------------------------------------------------------------------
Can use these endpoint to interact with vehicle_detail table
    1. GET - get list of vehicles       - localhost:8000/vehicles
------------------------------------------------------------------------------------------------
Can use these endpoint to interact with division table
    1. GET - get list of divisions         - localhost:8000/divisions
    2. GET - get details of a division     - localhost:8000/divisions?id=123
------------------------------------------------------------------------------------------------