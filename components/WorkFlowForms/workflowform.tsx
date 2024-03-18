import React from "react"

function WorkFlowForm({actiondata,assign,formdata}){
 return <>
     <form
                    action={actiondata}
                    className="flex items-center justify-center"
                  >
                    <input type="hidden" value={formdata.submit} name={formdata.status} />
                    <input type="hidden" value={formdata.value} name="status_id" />
                    <input
                      type="hidden"
                      value={assign}
                      name="assigned_to"
                    />
                    <input type="hidden" value="" name="comments" />

                    <button
                      type="submit"
                      className="flex w-1/2 justify-center rounded bg-primary p-3 font-medium text-gray"
                    >
                     {formdata.formdata}
                    </button>
                  </form>
    </>
}

export default WorkFlowForm;

export function Assignee({actiondata,assign,formdata,users}){
    return<>
     <form
                    action={actiondata}
                    className="flex items-center justify-center"
                  >
                    <input type="hidden" value={formdata.submit} name={formdata.status} />
                    <input type="hidden" value={formdata.value} name="status_id" />
                    <input
                      type="hidden"
                      value={assign}
                      name="assigned_to"
                    />
                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Assignee
                      </label>
                      <div className="relative z-20 bg-transparent dark:bg-form-input">
                        <select
                          name="assigned_to"
                          className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        >
                          {users}
                        </select>
                        <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                          <svg
                            className="fill-current"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                fill=""
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <input type="hidden" value="" name="comments" />

                    <button
                      type="submit"
                      className="flex w-1/2 justify-center rounded bg-primary p-3 font-medium text-gray"
                    >
                     {formdata.formdata}
                    </button>
                  </form>
    
    </>
}

