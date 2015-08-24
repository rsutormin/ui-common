/*global
 define
 */
/*jslint
 browser: true,
 white: true
 */
define([
    'kb.html',
    'kb.runtime',
    'q',
    'underscore',
    'kb.widget.vis.treechart'],
    function (html, R, q, _) {
        'use strict';

        function treechartWidget() {

            function widget(config) {

                var mount, container;


                function render() {

                    var tree = {
                            "distance": 1.376457276,
                            "children": [
                              {
                                "distance": 1.792236429,
                                "children": [
                                  {
                                    "distance": 1.908214243,
                                    "children": [
                                      {
                                        "distance": 1.001656414,
                                        "children": [
                                          {
                                            "distance": 1.008207384,
                                            "name": "Name: 552"
                                          },
                                          {
                                            "distance": 1.008207384,
                                            "name": "Name: 2708"
                                          }
                                        ]
                                      },
                                      {
                                        "distance": 0.5233165272,
                                        "children": [
                                          {
                                            "distance": 1.486547271,
                                            "name": "Name: 3302"
                                          },
                                          {
                                            "distance": 1.486547271,
                                            "name": "Name: 3826"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "distance": 0.8412192958,
                                    "children": [
                                      {
                                        "distance": 1.390365115,
                                        "children": [
                                          {
                                            "distance": 1.68649363,
                                            "name": "Name: 2360"
                                          },
                                          {
                                            "distance": 1.68649363,
                                            "name": "Name: 3004"
                                          }
                                        ]
                                      },
                                      {
                                        "distance": 0.9196819008,
                                        "children": [
                                          {
                                            "distance": 1.157657024,
                                            "children": [
                                              {
                                                "distance": 0.9995198202,
                                                "name": "Name: 4162"
                                              },
                                              {
                                                "distance": 0.3005282187,
                                                "children": [
                                                  {
                                                    "distance": 0.6989916016,
                                                    "name": "Name: 1541"
                                                  },
                                                  {
                                                    "distance": 0.6989916016,
                                                    "name": "Name: 1940"
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "distance": 0.6173554178,
                                            "children": [
                                              {
                                                "distance": 1.539821426,
                                                "name": "Name: 4037"
                                              },
                                              {
                                                "distance": 0.8294065316,
                                                "children": [
                                                  {
                                                    "distance": 0.7104148946,
                                                    "name": "Name: 276"
                                                  },
                                                  {
                                                    "distance": 0.7104148946,
                                                    "name": "Name: 1823"
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "distance": 0.3021339434,
                                "children": [
                                  {
                                    "distance": 1.12832085,
                                    "children": [
                                      {
                                        "distance": 1.114624996,
                                        "children": [
                                          {
                                            "distance": 1.414596951,
                                            "children": [
                                              {
                                                "distance": 1.102751795,
                                                "children": [
                                                  {
                                                    "distance": 0.3212886469,
                                                    "children": [
                                                      {
                                                        "distance": 0.326597288,
                                                        "name": "Name: 1943"
                                                      },
                                                      {
                                                        "distance": 0.326597288,
                                                        "name": "Name: 1969"
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "distance": 0.1559698469,
                                                    "children": [
                                                      {
                                                        "distance": 0.491916088,
                                                        "name": "Name: 275"
                                                      },
                                                      {
                                                        "distance": 0.2705457942,
                                                        "children": [
                                                          {
                                                            "distance": 0.2213702938,
                                                            "name": "Name: 1939"
                                                          },
                                                          {
                                                            "distance": 0.2213702938,
                                                            "name": "Name: 1962"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "distance": 0.4321463447,
                                                "children": [
                                                  {
                                                    "distance": 1.318491385,
                                                    "name": "Name: 1717"
                                                  },
                                                  {
                                                    "distance": 0.4765368742,
                                                    "children": [
                                                      {
                                                        "distance": 0.8419545108,
                                                        "name": "Name: 2370"
                                                      },
                                                      {
                                                        "distance": 0.8419545108,
                                                        "name": "Name: 3215"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "distance": 0.4140375469,
                                            "children": [
                                              {
                                                "distance": 1.112441842,
                                                "children": [
                                                  {
                                                    "distance": 0.8077857597,
                                                    "children": [
                                                      {
                                                        "distance": 0.8309695327,
                                                        "name": "Name: 3089"
                                                      },
                                                      {
                                                        "distance": 0.8309695327,
                                                        "name": "Name: 3691"
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "distance": 0.2533536077,
                                                    "children": [
                                                      {
                                                        "distance": 0.8206270159,
                                                        "children": [
                                                          {
                                                            "distance": 0.5647746687,
                                                            "name": "Name: 2273"
                                                          },
                                                          {
                                                            "distance": 0.5647746687,
                                                            "name": "Name: 2869"
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "distance": 0.5663568321,
                                                        "children": [
                                                          {
                                                            "distance": 0.8190448525,
                                                            "name": "Name: 926"
                                                          },
                                                          {
                                                            "distance": 0.8190448525,
                                                            "name": "Name: 3610"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "distance": 0.7895972065,
                                                "children": [
                                                  {
                                                    "distance": 1.219541215,
                                                    "children": [
                                                      {
                                                        "distance": 0.7420587129,
                                                        "name": "Name: 610"
                                                      },
                                                      {
                                                        "distance": 0.7420587129,
                                                        "name": "Name: 2927"
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "distance": 0.8135331682,
                                                    "children": [
                                                      {
                                                        "distance": 0.6174569305,
                                                        "children": [
                                                          {
                                                            "distance": 0.5306098289,
                                                            "name": "Name: 1773"
                                                          },
                                                          {
                                                            "distance": 0.5306098289,
                                                            "name": "Name: 2840"
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "distance": 0.1365733057,
                                                        "children": [
                                                          {
                                                            "distance": 0.4862423141,
                                                            "children": [
                                                              {
                                                                "distance": 0.5252511397,
                                                                "name": "Name: 923"
                                                              },
                                                              {
                                                                "distance": 0.5252511397,
                                                                "name": "Name: 1361"
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "distance": 0.3908505488,
                                                            "children": [
                                                              {
                                                                "distance": 0.620642905,
                                                                "name": "Name: 120"
                                                              },
                                                              {
                                                                "distance": 0.620642905,
                                                                "name": "Name: 965"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        "distance": 0.4455461505,
                                        "children": [
                                          {
                                            "distance": 1.425536216,
                                            "children": [
                                              {
                                                "distance": 0.6130064666,
                                                "children": [
                                                  {
                                                    "distance": 0.9870079816,
                                                    "children": [
                                                      {
                                                        "distance": 0.3425072106,
                                                        "children": [
                                                          {
                                                            "distance": 0.4662556515,
                                                            "name": "Name: 1934"
                                                          },
                                                          {
                                                            "distance": 0.4662556515,
                                                            "name": "Name: 2895"
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "distance": 0.3305256258,
                                                        "children": [
                                                          {
                                                            "distance": 0.4782372362,
                                                            "name": "Name: 638"
                                                          },
                                                          {
                                                            "distance": 0.4782372362,
                                                            "name": "Name: 2863"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "distance": 0.5086368895,
                                                    "children": [
                                                      {
                                                        "distance": 0.5748175952,
                                                        "children": [
                                                          {
                                                            "distance": 0.3749859298,
                                                            "children": [
                                                              {
                                                                "distance": 0.3373304291,
                                                                "name": "Name: 219"
                                                              },
                                                              {
                                                                "distance": 0.3373304291,
                                                                "name": "Name: 4296"
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "distance": 0.2214705125,
                                                            "children": [
                                                              {
                                                                "distance": 0.3194313182,
                                                                "children": [
                                                                  {
                                                                    "distance": 0.1714145283,
                                                                    "name": "Name: 39"
                                                                  },
                                                                  {
                                                                    "distance": 0.1714145283,
                                                                    "name": "Name: 664"
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "distance": 0.1962190988,
                                                                "children": [
                                                                  {
                                                                    "distance": 0.2946267476,
                                                                    "name": "Name: 598"
                                                                  },
                                                                  {
                                                                    "distance": 0.1121933395,
                                                                    "children": [
                                                                      {
                                                                        "distance": 0.1824334081,
                                                                        "name": "Name: 867"
                                                                      },
                                                                      {
                                                                        "distance": 0.1824334081,
                                                                        "name": "Name: 1780"
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "distance": 0.5109781416,
                                                        "children": [
                                                          {
                                                            "distance": 0.3839107055,
                                                            "children": [
                                                              {
                                                                "distance": 0.392245107,
                                                                "name": "Name: 1699"
                                                              },
                                                              {
                                                                "distance": 0.392245107,
                                                                "name": "Name: 2001"
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "distance": 0.2165618304,
                                                            "children": [
                                                              {
                                                                "distance": 0.5595939822,
                                                                "name": "Name: 1001"
                                                              },
                                                              {
                                                                "distance": 0.5595939822,
                                                                "name": "Name: 2176"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "distance": 0.3355296621,
                                                "children": [
                                                  {
                                                    "distance": 1.376561446,
                                                    "children": [
                                                      {
                                                        "distance": 0.696686202,
                                                        "name": "Name: 853"
                                                      },
                                                      {
                                                        "distance": 0.696686202,
                                                        "name": "Name: 4264"
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "distance": 0.3902048872,
                                                    "children": [
                                                      {
                                                        "distance": 0.9347835865,
                                                        "children": [
                                                          {
                                                            "distance": 0.7482591745,
                                                            "name": "Name: 262"
                                                          },
                                                          {
                                                            "distance": 0.2047307906,
                                                            "children": [
                                                              {
                                                                "distance": 0.5435283839,
                                                                "name": "Name: 3426"
                                                              },
                                                              {
                                                                "distance": 0.5435283839,
                                                                "name": "Name: 4152"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "distance": 0.9068156662,
                                                        "children": [
                                                          {
                                                            "distance": 0.7762270948,
                                                            "name": "Name: 1577"
                                                          },
                                                          {
                                                            "distance": 0.7762270948,
                                                            "name": "Name: 2929"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "distance": 1.350206231,
                                            "children": [
                                              {
                                                "distance": 1.324859918,
                                                "children": [
                                                  {
                                                    "distance": 1.159247377,
                                                    "name": "Name: 2962"
                                                  },
                                                  {
                                                    "distance": 1.159247377,
                                                    "name": "Name: 3058"
                                                  }
                                                ]
                                              },
                                              {
                                                "distance": 0.7520045443,
                                                "children": [
                                                  {
                                                    "distance": 0.6453997817,
                                                    "children": [
                                                      {
                                                        "distance": 0.5651720927,
                                                        "children": [
                                                          {
                                                            "distance": 0.3209154717,
                                                            "children": [
                                                              {
                                                                "distance": 0.2006154049,
                                                                "name": "Name: 60"
                                                              },
                                                              {
                                                                "distance": 0.05467875555,
                                                                "children": [
                                                                  {
                                                                    "distance": 0.1459366494,
                                                                    "name": "Name: 1983"
                                                                  },
                                                                  {
                                                                    "distance": 0.1459366494,
                                                                    "name": "Name: 4131"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "distance": 0.1567366503,
                                                            "children": [
                                                              {
                                                                "distance": 0.3647942263,
                                                                "name": "Name: 2602"
                                                              },
                                                              {
                                                                "distance": 0.1667330554,
                                                                "children": [
                                                                  {
                                                                    "distance": 0.1980611709,
                                                                    "name": "Name: 1547"
                                                                  },
                                                                  {
                                                                    "distance": 0.1980611709,
                                                                    "name": "Name: 3079"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "distance": 0.1238947733,
                                                        "children": [
                                                          {
                                                            "distance": 0.4900236537,
                                                            "children": [
                                                              {
                                                                "distance": 0.4727845423,
                                                                "name": "Name: 775"
                                                              },
                                                              {
                                                                "distance": 0.4727845423,
                                                                "name": "Name: 1933"
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            "distance": 0.3771160005,
                                                            "children": [
                                                              {
                                                                "distance": 0.5856921955,
                                                                "name": "Name: 3583"
                                                              },
                                                              {
                                                                "distance": 0.5856921955,
                                                                "name": "Name: 4076"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "distance": 0.540524724,
                                                    "children": [
                                                      {
                                                        "distance": 1.191578027,
                                                        "name": "Name: 1046"
                                                      },
                                                      {
                                                        "distance": 0.5202300454,
                                                        "children": [
                                                          {
                                                            "distance": 0.6713479816,
                                                            "name": "Name: 2121"
                                                          },
                                                          {
                                                            "distance": 0.6713479816,
                                                            "name": "Name: 3497"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "distance": 0.7534132514,
                                    "children": [
                                      {
                                        "distance": 2.133169018,
                                        "children": [
                                          {
                                            "distance": 1.660248327,
                                            "children": [
                                              {
                                                "distance": 0.8613499299,
                                                "name": "Name: 1245"
                                              },
                                              {
                                                "distance": 0.8613499299,
                                                "name": "Name: 2787"
                                              }
                                            ]
                                          },
                                          {
                                            "distance": 1.352815645,
                                            "children": [
                                              {
                                                "distance": 1.168782612,
                                                "name": "Name: 1935"
                                              },
                                              {
                                                "distance": 1.168782612,
                                                "name": "Name: 3578"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        "distance": 1.149285271,
                                        "children": [
                                          {
                                            "distance": 1.294750118,
                                            "children": [
                                              {
                                                "distance": 0.9797336831,
                                                "children": [
                                                  {
                                                    "distance": 0.4151497904,
                                                    "children": [
                                                      {
                                                        "distance": 0.8158484126,
                                                        "name": "Name: 665"
                                                      },
                                                      {
                                                        "distance": 0.4514520562,
                                                        "children": [
                                                          {
                                                            "distance": 0.3643963564,
                                                            "name": "Name: 919"
                                                          },
                                                          {
                                                            "distance": 0.3643963564,
                                                            "name": "Name: 1866"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "distance": 0.3078115072,
                                                    "children": [
                                                      {
                                                        "distance": 0.5628810009,
                                                        "children": [
                                                          {
                                                            "distance": 0.3603056948,
                                                            "name": "Name: 885"
                                                          },
                                                          {
                                                            "distance": 0.3603056948,
                                                            "name": "Name: 888"
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "distance": 0.3431809544,
                                                        "children": [
                                                          {
                                                            "distance": 0.5800057414,
                                                            "name": "Name: 886"
                                                          },
                                                          {
                                                            "distance": 0.5800057414,
                                                            "name": "Name: 3741"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "distance": 0.9738203015,
                                                "children": [
                                                  {
                                                    "distance": 0.426379964,
                                                    "children": [
                                                      {
                                                        "distance": 0.8105316206,
                                                        "name": "Name: 2123"
                                                      },
                                                      {
                                                        "distance": 0.8105316206,
                                                        "name": "Name: 3544"
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "distance": 0.4117358512,
                                                    "children": [
                                                      {
                                                        "distance": 0.4372052504,
                                                        "children": [
                                                          {
                                                            "distance": 0.387970483,
                                                            "name": "Name: 3385"
                                                          },
                                                          {
                                                            "distance": 0.1730098704,
                                                            "children": [
                                                              {
                                                                "distance": 0.2149606126,
                                                                "name": "Name: 2994"
                                                              },
                                                              {
                                                                "distance": 0.2149606126,
                                                                "name": "Name: 3296"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "distance": 0.277782022,
                                                        "children": [
                                                          {
                                                            "distance": 0.5473937114,
                                                            "name": "Name: 1359"
                                                          },
                                                          {
                                                            "distance": 0.1988045203,
                                                            "children": [
                                                              {
                                                                "distance": 0.348589191,
                                                                "name": "Name: 1854"
                                                              },
                                                              {
                                                                "distance": 0.348589191,
                                                                "name": "Name: 2489"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "distance": 1.09919418,
                                            "children": [
                                              {
                                                "distance": 1.157615094,
                                                "children": [
                                                  {
                                                    "distance": 1.248672729,
                                                    "name": "Name: 868"
                                                  },
                                                  {
                                                    "distance": 0.8012494332,
                                                    "children": [
                                                      {
                                                        "distance": 0.4474232962,
                                                        "name": "Name: 2877"
                                                      },
                                                      {
                                                        "distance": 0.1406463548,
                                                        "children": [
                                                          {
                                                            "distance": 0.3067769414,
                                                            "name": "Name: 1017"
                                                          },
                                                          {
                                                            "distance": 0.3067769414,
                                                            "name": "Name: 1018"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {
                                                "distance": 0.7967820922,
                                                "children": [
                                                  {
                                                    "distance": 0.78634576,
                                                    "children": [
                                                      {
                                                        "distance": 0.8231599714,
                                                        "name": "Name: 118"
                                                      },
                                                      {
                                                        "distance": 0.8231599714,
                                                        "name": "Name: 1722"
                                                      }
                                                    ]
                                                  },
                                                  {
                                                    "distance": 0.208561845,
                                                    "children": [
                                                      {
                                                        "distance": 0.8484952761,
                                                        "children": [
                                                          {
                                                            "distance": 0.5524486103,
                                                            "name": "Name: 3298"
                                                          },
                                                          {
                                                            "distance": 0.1067984299,
                                                            "children": [
                                                              {
                                                                "distance": 0.4456501803,
                                                                "name": "Name: 1942"
                                                              },
                                                              {
                                                                "distance": 0.4456501803,
                                                                "name": "Name: 4153"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        "distance": 0.5328106632,
                                                        "children": [
                                                          {
                                                            "distance": 0.8681332233,
                                                            "name": "Name: 4145"
                                                          },
                                                          {
                                                            "distance": 0.1481990097,
                                                            "children": [
                                                              {
                                                                "distance": 0.4197020539,
                                                                "children": [
                                                                  {
                                                                    "distance": 0.3002321597,
                                                                    "name": "Name: 1510"
                                                                  },
                                                                  {
                                                                    "distance": 0.3002321597,
                                                                    "name": "Name: 1949"
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                "distance": 0.393704649,
                                                                "children": [
                                                                  {
                                                                    "distance": 0.3262295646,
                                                                    "name": "Name: 1945"
                                                                  },
                                                                  {
                                                                    "distance": 0.3262295646,
                                                                    "name": "Name: 1946"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          };

                    console.log(tree);

                    var $tree = $.jqElem('div').css({width : '800px', height : '500px'}).kbaseTreechart(

                        {
                            lineStyle: 'square', 
                            dataset : tree
                        }

                    );

                    return {
                        title: 'Sample tree chart',
                        content: $tree.$elem,
                    }

                }

                function attach(node) {
                    return q.Promise(function (resolve) {
                        mount = node;
                        container = document.createElement('div');
                        mount.appendChild(container);
                        var rendered = render();

                        R.send('app', 'title', rendered.title);
                        $(container).append(rendered.content);

                        resolve();
                    });
                }
                function start(params) {
                    return q.Promise(function (resolve) {
                        resolve();
                    });
                }
                function stop(node) {
                    return q.Promise(function (resolve) {

                        resolve();
                    });
                }
                function detach(node) {
                    return q.Promise(function (resolve) {

                        resolve();
                    });
                }

                return {
                    attach: attach,
                    start: start,
                    stop: stop,
                    detach: detach
                };
            }


            return {
                create: function (config) {
                    return widget(config);
                }
            };
        }


        function setup(app) {
            app.addRoute({
                path: ['treechart'],
                widget: treechartWidget()
            });

        }
        function teardown() {
            // TODO: remove routes
            return false;
        }
        function start() {
            //
            return false;
        }
        function stop() {
            //
            return false;
        }
        return {
            setup: setup,
            teardown: teardown,
            start: start,
            stop: stop
        };
    });
