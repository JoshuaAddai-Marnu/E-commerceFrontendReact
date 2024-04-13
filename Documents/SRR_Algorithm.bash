#!/bin/bash
# SELFISH ROUND ROBIN ALGORITHM                                                          #
# It prioritizes processes with prolonged or extended execution times and high priority, #
# ensuring they obtain or receive the required Central Processing Unit(CPU) timeSlice.        #
# The selfish round-robin algorithm is designed to optimize the implementation beyond    #
# the standard round-robin method.                                                       #
#                                                                                        #
#                                                                                        #
# Name: Joshua Addai-Marnu                                                               #
# Date: 01/12/2023                                                                       #
# Student_ID: 19548571                                                                   #
#                                                                                        #
##########################################################################################

# 1.Reading argument for programming into an array

incValAcceptedQueue=1
incValNewQueue=2
quanta=1
directOutput=
outputToFile=
timeSlice=0
timeConsumed=0
processesCompleted=0
paddingSpace=12
ProgArgument=($*)
lengthOfArgument=$#


# 2.Using multipe arrays(no multidimensional arrays in Bash)
 
declare -a nameOfProcesses=()
declare -a serviceTimeProcesses=()
declare -a arrivalTimeProcesses=()

declare -a nameOfNewQueue=()
declare -a serviceTimeNewQueue=()
declare -a priorityNewQueue=()
declare -a statusNewQueue=()

declare -a nameOfAcceptedQueue=()
declare -a seriveTimeAcceptedQueue=()
declare -a priorityAcceptedQueue=()
declare -a statusAcceptedQueue=()

# 3. FUNCTIONS

# a. Function: For spacing out text properly.
adjustNumberOfSpaces() {
    local numberOfSpaces="$1"
    local timeSlice="$2"

    if [ "${#timeSlice}" -ge 2 ]; then
        numberOfSpaces=$((numberOfSpaces - ${#timeSlice} + 1))
    fi

    echo "$numberOfSpaces"
}

# b. Function: To verify if a process has consumed the amount quanta required on the CPU.
verifyQuanta() {
    if [ "${seriveTimeAcceptedQueue[0]}" -gt 0 ]; then
        ((timeConsumed += 1))
    else
        timeConsumed=$quanta
    fi
}

# c. Function: Outputing result either to stdout, file or both.
outputResult() {
    local directOutput="$1"
    local content="$2"
    local outputToFile="$3"
    local append="$4"

    if [[ "$directOutput" == "file" || "$directOutput" == "both" ]]; then
        # Make sure the directory structure exist
        mkdir -p "$(dirname "$outputToFile")"
        
        # Check if append parameter is specified
        if [ "$append" == "append" ]; then
            echo "$content" >> "$outputToFile"
        else
            echo "$content" > "$outputToFile"
        fi
    fi

    if [[ "$directOutput" == "stdout" || "$directOutput" == "both" ]]; then
        echo "$content"
    fi
}

# d. Function: For formatting the process's state.
createHeader() {
    local name="$1"
    local numberOfSpaces="$2"
    echo -n "$name"
    
    for ((i=0; i<numberOfSpaces; i++)); do
        echo -n " "
    done
}

# e. Function: For printing error and exiting script.
outputErrorMsgAndExit() {
    local errorMsg="$1"
    echo "ERROR: $errorMsg"
    exit 1
}


# 3. CHECKING FOR PARAMETER ERRORS.

# a. Checking if the data file path exists
if ! [ -e "${ProgArgument[0]}" ]
then
    outputErrorMsgAndExit "ERROR: File path ${ProgArgument[0]} does not exist."
fi


# b. Checking if the right number of argument and argument type was passed
if [[ $lengthOfArgument -lt 3 ]]
then  
    outputErrorMsgAndExit "Sorry🙁, three or four arguments are required."   
elif [ $lengthOfArgument -eq 4 ]
then
    if [[ ${ProgArgument[3]} =~ ^[0-9]+$ ]]
    then
        quanta=${ProgArgument[3]}
    else
        outputErrorMsgAndExit "Sorry🙁, enter the correct value (The quanta value has to be an integer)"
    fi
fi

# c. çhecking if the values passed for argument 2 and 3 are integers.
if ! [[ ${ProgArgument[1]} =~ ^[0-9]+$ ]] || ! [[ ${ProgArgument[2]} =~ ^[0-9]+$ ]] 
    then 
        outputErrorMsgAndExit "Argument 2 and 3 values should be integers "
# checking that incremental value of new queue is not less than accepted queue
elif [[ ${ProgArgument[1]} -lt ${ProgArgument[2]} ]]
    then 
        outputErrorMsgAndExit "The incremental value of the of 'Argument 2(New Queue)' should be greater than the incremental value of 'argument 3(Accepted Queue)'"
else
    incValNewQueue=${ProgArgument[1]}
    incValAcceptedQueue=${ProgArgument[2]}
fi


echo "******************************************"
echo "THIS IS THE SELFISH ROUND ROBIN ALGORITHM"
echo "******************************************"
echo

# prompt the user where the output of th results(of the algorithm) should be displayed.
while true;
do
    echo -e "Which of the following options do you want the output of the results to be displayed?  OPTIONS: STDOUT or FILE or BOTH"
    read userFeedback

    # Convert userFeedback to lowercase (for case-insensitive comparison)
    directOutput=$(echo "$userFeedback" | tr '[:upper:]' '[:lower:]')

    if [[ "$directOutput" == "stdout" || "$directOutput" == "file" || "$directOutput" == "both" ]]; then
        # if a correct option is given, exit the loop.
        if [[ $directOutput == "file" || $directOutput == "both"  ]]
        then
            while true;
            do
                echo -e "Which filename do you want to store output of the results?"
                read userFeedback
                if [[ -n "$userFeedback" ]]; then
                    directOutputFile="$userFeedback"
                    break
                else
                    echo " Kindly enter a filename. Cannot leave this field blank."
                fi
            done
        fi 
        break 
    else
        echo "Kindly provide either STDOUT or FILE or BOTH because $userFeedback is an invalid option."
    fi
done

echo

# Read processes from provided path
while read -r line || [[ -n $line ]]; 
do
  read -r name service arrival <<<"$line"

  # Adding the new process array to the processes array
  nameOfProcesses+=("$name")
  serviceTimeProcesses+=("$service")
  arrivalTimeProcesses+=("$arrival")
done < "${ProgArgument[0]}"

# Printing out the header for the program
headers="ArrTime    "
for name in "${nameOfProcesses[@]}"; 
do
    headers+=$(createHeader "$name" 12)
done

outputResult "$directOutput" "$headers" "$directOutputFile"

while [ $processesCompleted -lt ${#nameOfProcesses[@]} ]
do

    if [ ${#nameOfAcceptedQueue[@]} -gt 0 ]; 
    then
        # moving the first process to the end of the queue
        if [ $timeConsumed -eq $quanta ]
        then
            timeConsumed=0
            firstProcessName=${nameOfAcceptedQueue[0]}
            firstProcessService=${seriveTimeAcceptedQueue[0]}
            firstProcessPriority=${priorityAcceptedQueue[0]}
            firstProcessStatus=${statusAcceptedQueue[0]}
            
            nameOfAcceptedQueue=("${nameOfAcceptedQueue[@]:1}" "$firstProcessName")
            seriveTimeAcceptedQueue=("${seriveTimeAcceptedQueue[@]:1}" "$firstProcessService")
            priorityAcceptedQueue=("${priorityAcceptedQueue[@]:1}" "$firstProcessPriority")
            statusAcceptedQueue=("${statusAcceptedQueue[@]:1}" "$firstProcessStatus")

            # change the status and reduce the service timeSlice of the first process
            statusAcceptedQueue[0]="R"
            # change the previous first process status to waiting
            if [ ${#nameOfAcceptedQueue[@]} -gt 1 ]; 
            then
                statusAcceptedQueue[${#statusAcceptedQueue[@]} - 1]="W"
            fi
        fi

        ((seriveTimeAcceptedQueue[0]--))
        verifyQuanta
    fi



    # checking that we have loaded all the process
    if [ $(( ${#nameOfAcceptedQueue[@]} + ${#nameOfNewQueue[@]} + $processesCompleted )) -ne ${#nameOfProcesses[@]} ]; then
        
        # fetching the process based on their arrival timeSlice
        for ((i = 0; i < ${#arrivalTimeProcesses[@]}; i++)); 
        do
            if [ "${arrivalTimeProcesses[i]}" -eq $timeSlice ]; then
                # Loading the process into new or accepted queue based on whether there is a process in the accepted queue   
                if [ ${#nameOfAcceptedQueue[@]} -eq 0 ]; then
                    nameOfAcceptedQueue+=("${nameOfProcesses[i]}")
                    seriveTimeAcceptedQueue+=("${serviceTimeProcesses[i]}")
                    priorityAcceptedQueue+=(0)
                    statusAcceptedQueue+=("R")
                    
                    # reduce the service timeSlice of the first process
                    ((seriveTimeAcceptedQueue[0]--))
                    verifyQuanta
                else
                    nameOfNewQueue+=("${nameOfProcesses[i]}")
                    serviceTimeNewQueue+=("${serviceTimeProcesses[i]}")
                    priorityNewQueue+=(0)
                    statusNewQueue+=("W")
                fi

            fi


        done
        
    fi

    # increasing the individual queue's priority to their incrementer values provided
    for ((i = 0; i < ${#priorityAcceptedQueue[@]}; i++)); do
        ((priorityAcceptedQueue[i]+=incValAcceptedQueue))
    done

    for ((i = 0; i < ${#upNewQueue[@]}; i++)); do
        ((up[i]+=incValNewQueue))
    done

    # printing out the current state of all the processes
    adjustNumberOfSpaces=$(adjustNumberOfSpaces 12 "$timeSlice")
    processingData=$(createHeader "$timeSlice" "$adjustNumberOfSpaces")
    for index in "${!nameOfProcesses[@]}"; 
    do
        name="${nameOfProcesses[index]}"
        arrival="${arrivalTimeProcesses[index]}"

        s=
        for ((i = 0; i < ${#nameOfAcceptedQueue[@]}; i++)); 
        do
            if [ "${nameOfAcceptedQueue[i]}" == "$name" ]; 
            then
                s+="${statusAcceptedQueue[i]}"
            fi
        done

        if [ -z "$s" ] 
        then    
            for ((i = 0; i < ${#nameOfNewQueue[@]}; i++)); 
            do
                if [ "${nameOfNewQueue[i]}" == "$name" ]; 
                then
                    s+="${statusNewQueue[i]}"
                fi
            done
        fi
       
        if [ -n "$s" ]; 
        then
            processingData+=$(createHeader "$s" 12)
        elif [ $(( $arrival )) -le ${timeSlice} ]; then
            processingData+=$(createHeader "F" 12)
        else
            processingData+=$(createHeader "-" 12)
        fi

    done
    outputResult "$directOutput" "$processingData" "$directOutputFile" "append"

    # check if any process has completed it nut and removing them from the acceptedQueue
    prevAcceptedQueueLength=${#nameOfAcceptedQueue[@]}
    tempnameOfAcceptedQueue=()
    tempserviceTimeAcceptedQueue=()
    temppriorityAcceptedQueue=()
    tempstatusAcceptedQueue=()

    for ((i = 0; i < ${#serviceTimeAcceptedQueue[@]}; i++)); 
    do
        if [ -n "${serviceTimeAcceptedQueue[i]}" ] && [ "${serviceTimeAcceptedQueue[i]}" -gt 0 ]; 
        then
            tempnameOfAcceptedQueue+=("${nameOfAcceptedQueue[i]}")
            tempserviceTimeAcceptedQueue+=("${serviceTimeAcceptedQueue[i]}")
            temppriorityAcceptedQueue+=("${priorityAcceptedQueue[i]}")
            tempstatusAcceptedQueue+=("${statusAcceptedQueue[i]}")
        fi
    done

    # increment completed processes based on the count of the filtered-out process
    diff=$((prevAcceptedQueueLength - ${#tempnameOfAcceptedQueue[@]}))
    ((completedProcess += diff))

    nameOfAcceptedQueue=("${tempnameOfAcceptedQueue[@]}")
    serviceTimeAcceptedQueue=("${tempserviceTimeAcceptedQueue[@]}")
    priorityAcceptedQueue=("${temppriorityAcceptedQueue[@]}")
    statusAcceptedQueue=("${tempstatusAcceptedQueue[@]}")

    # check and remove process from new queue when the priority is equal to the one on the accepted queue
    tempnameOfNewQueue=()
    tempserviceTimeNewQueue=()
    temppriorityNewQueue=()
    tempstatusNewQueue=()
    for ((i = 0; i < ${#nameOfNewQueue[@]}; i++)); 
    do
        firstPriority="${priorityAcceptedQueue[0]}"
        if [ ! -n "$firstPriority" ]; then
            firstPriority=0
        fi


        # Check if the priority of the current newQueue element's priority is greater than or equal to the priority of the first element in acceptedQueue
        if [ "${priorityNewQueue[i]}" -ge "$firstPriority" ]; 
        then
            nameOfAcceptedQueue+=("${nameOfNewQueue[i]}")
            serviceTimeAcceptedQueue+=("${serviceTimeNewQueue[i]}")
            priorityAcceptedQueue+=("${priorityNewQueue[i]}")
            statusAcceptedQueue+=("${statusNewQueue[i]}")

        else
            tempnameOfNewQueue+=("${nameOfNewQueue[i]}")
            tempserviceTimeNewQueue+=("${serviceTimeNewQueue[i]}")
            temppriorityNewQueue+=("${priorityNewQueue[i]}")
            tempstatusNewQueue+=("${statusNewQueue[i]}")
        fi
    done

    nameOfNewQueue=("${tempnameOfNewQueue[@]}")
    serviceTimeNewQueue=("${tempserviceTimeNewQueue[@]}")
    priorityNewQueue=("${temppriorityNewQueue[@]}")
    statusNewQueue=("${tempstatusNewQueue[@]}")

    ((timeSlice++))
done

adjustNumberOfSpaces=$(adjustNumberOfSpaces 10 "$timeSlice")
footer=$(createHeader "$timeSlice" "$adjustNumberOfSpaces")
for name in "${nameOfProcesses[@]}"; do
  footer+="F            "
done

outputResult "$directOutput" "$footer" "$directOutputFile" "append"

exit 0 

