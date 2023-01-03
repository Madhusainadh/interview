import logo from "./logo.svg";
import "./App.css";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Text,
  Switch,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
function App() {
  const [usersindex, setusersindex] = useState(true);
  const [usersshow, setusersshow] = useState(true);
  const [usersstore, setusersstore] = useState(true);
  const [usersupdate, setusersupdate] = useState(true);
  const [usersdestroy, setusersdestroy] = useState(true);
  const [usersactivities, setusersactivities] = useState(true);
  const [usersrole, setusersrole] = useState(true);
  const [usersdeactivate, setusersdeactivate] = useState(true);
  const [rolesindex, setrolesindex] = useState(true);
  const [rolesshow, setrolesshow] = useState(true);
  const [rolesstore, setrolesstore] = useState(true);
  const [resourcesstore, setresourcesstore] = useState(true);
  const [resourcesupdate, setresourcesupdate] = useState(true);
  const [resourcesdestroy, setresourcesdestroy] = useState(true);
  const [channelsindex, setchannelsindex] = useState(true);
  const [integrationsactivate, setintegrationsactivate] = useState(true);
  const [integrationsdeactivate, setintegrationsdeactivate] = useState(true);
  const [integrationsactive, setintegrationsactive] = useState(true);
  const [apikeysindex, setapikeysindex] = useState(true);
  const [apikeysshow, setapikeysshow] = useState(true);
  const [apikeysstore, setapikeysstore] = useState(true);
  const [apikeysupdate, setapikeysupdate] = useState(true);
  const [apikeysdestroy, setapikeysdestroy] = useState(true);
  const [apikeyscreditsgrant, setapikeyscreditsgrant] = useState(true);
  const [apikeyscreditsrevoke, setapikeyscreditsrevoke] = useState(true);

  const [data, setdata] = useState([
    "users.index",
    "users.show",
    "users.store",
    "users.update",
    "users.destroy",
    "users.activities",
    "users.role.set",
    "users.deactivate",
    "roles.index",
    "roles.show",
    "roles.store",
    "resources.store",
    "resources.update",
    "resources.destroy",
    "channels.index",
    "integrations.activate",
    "integrations.deactivate",
    "integrations.active",
    "api-keys.index",
    "api-keys.show",
    "api-keys.store",
    "api-keys.update",
    "api-keys.destroy",
    "api-keys.credits.grant",
    "api-keys.credits.revoke",
  ]);

  const togglefunction = (e) => {
    let name = e.target.name;
    let value = e.target.value == "false" ? true : false;
    var temp = data;
    console.log(data.includes(name), value);
    console.log(value == false);
    if (temp.includes(name) && value == true) {
      let index = temp.indexOf(name);
      temp.splice(index, 1);
      setdata(temp);
    } else {
      setdata([...temp, name]);
    }
    
  };

  const submite=()=>{
    console.log(data)
  }

  return (
    <Box className="App">
    <Text fontSize={"20px"} textAlign={"start"} >Standard Permissions</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>LIST</Th>
            <Th>SHOW</Th>
            <Th>CREATE</Th>
            <Th>UPDATE</Th>
            <Th>DELETE</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>User</Td>
            <Td>
              <Switch
                name="users.index"
                value={!usersindex}
                onChange={(e) => {
                  setusersindex(!usersindex);
                  togglefunction(e);
                }}
                isChecked={usersindex}
              />
            </Td>
            <Td>
              <Switch
                name="users.show"
                value={!usersshow}
                onChange={(e) => {
                  setusersshow(!usersshow);
                  togglefunction(e);
                }}
                isChecked={usersshow}
              />
            </Td>
            <Td>
              <Switch
                name="users.store"
                value={!usersstore}
                onChange={(e) => {
                  setusersstore(!usersstore);
                  togglefunction(e);
                }}
                isChecked={usersstore}
              />
            </Td>
            <Td>
              <Switch
                name="users.update"
                value={!usersupdate}
                onChange={(e) => {
                  setusersupdate(!usersupdate);
                  togglefunction(e);
                }}
                isChecked={usersupdate}
              />
            </Td>
            <Td>
              <Switch
                name="users.destroy"
                value={!usersdestroy}
                onChange={(e) => {
                  setusersdestroy(!usersdestroy);
                  togglefunction(e);
                }}
                isChecked={usersdestroy}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>Roles</Td>
            <Td>
              <Switch
                name="roles.index"
                value={!rolesindex}
                onChange={(e) => {
                  setrolesindex(!rolesindex);
                  togglefunction(e);
                }}
                isChecked={rolesindex}
              />
            </Td>
            <Td>
              <Switch
                name="roles.show"
                value={!rolesshow}
                onChange={(e) => {
                  setrolesshow(!rolesshow);
                  togglefunction(e);
                }}
                isChecked={rolesshow}
              />
            </Td>
            <Td>
              <Switch
                name="roles.store"
                value={!rolesstore}
                onChange={(e) => {
                  setrolesstore(!rolesstore);
                  togglefunction(e);
                }}
                isChecked={rolesstore}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>Resources</Td>
            <Td></Td>
            <Td></Td>
            <Td>
              <Switch
                name="resources.store"
                value={!resourcesstore}
                onChange={(e) => {
                  setresourcesstore(!resourcesstore);
                  togglefunction(e);
                }}
                isChecked={resourcesstore}
              />
            </Td>
            <Td>
              <Switch
                name="resources.update"
                value={!resourcesupdate}
                onChange={(e) => {
                  setresourcesupdate(!resourcesupdate);
                  togglefunction(e);
                }}
                isChecked={resourcesupdate}
              />
            </Td>
            <Td>
              <Switch
                name="resources.destroy"
                value={!resourcesupdate}
                onChange={(e) => {
                  setresourcesdestroy(!resourcesdestroy);
                  togglefunction(e);
                }}
                isChecked={resourcesdestroy}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>Channels</Td>

            <Td>
              <Switch
                name="channels.index"
                value={!channelsindex}
                onChange={(e) => {
                  setchannelsindex(!channelsindex);
                  togglefunction(e);
                }}
                isChecked={channelsindex}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>Api Keys</Td>
            <Td>
              <Switch
                name="api-keys.index"
                value={!apikeysindex}
                onChange={(e) => {
                  setapikeysindex(!apikeysindex);
                  togglefunction(e);
                }}
                isChecked={apikeysindex}
              />
            </Td>
            <Td>
              <Switch
                name="api-keys.show"
                value={!apikeysshow}
                onChange={(e) => {
                  setapikeysshow(!apikeysshow);
                  togglefunction(e);
                }}
                isChecked={apikeysshow}
              />
            </Td>
            <Td>
              <Switch
                name="api-keys.store"
                value={!apikeysstore}
                onChange={(e) => {
                  setapikeysstore(!apikeysstore);
                  togglefunction(e);
                }}
                isChecked={apikeysstore}
              />
            </Td>
            <Td>
              <Switch
                name="api-keys.update"
                value={!apikeysupdate}
                onChange={(e) => {
                  setapikeysupdate(!apikeysupdate);
                  togglefunction(e);
                }}
                isChecked={apikeysupdate}
              />
            </Td>
            <Td>
              <Switch
                name="api-keys.destroy"
                value={!apikeysdestroy}
                onChange={(e) => {
                  setapikeysdestroy(!apikeysdestroy);
                  togglefunction(e);
                }}
                isChecked={apikeysdestroy}
              />
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Table>
      <Text fontSize={"20px"} textAlign={"start"} >Additional Permissions</Text>
        <Tbody>
          <Tr>
            <Td>User-Activites</Td>
            <Td>
              <Switch
                name="users.activities"
                value={!usersactivities}
                onChange={(e) => {
                  setusersactivities(!usersactivities);
                  togglefunction(e);
                }}
                isChecked={usersactivities}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>User-Set Role</Td>
            <Td>
              <Switch
                name="users.role.set"
                value={!usersrole}
                onChange={(e) => {
                  setusersrole(!usersrole);
                  togglefunction(e);
                }}
                isChecked={usersrole}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>User-Deactivate</Td>
            <Td>
              <Switch
                name="users.deactivate"
                value={!usersdeactivate}
                onChange={(e) => {
                  setusersdeactivate(!usersdeactivate);
                  togglefunction(e);
                }}
                isChecked={usersdeactivate}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>Integrations-Activate</Td>
            <Td>
              <Switch
                name="integrations.activate"
                value={!integrationsactivate}
                onChange={(e) => {
                  setintegrationsactivate(!integrationsactivate);
                  togglefunction(e);
                }}
                isChecked={integrationsactivate}
              />
            </Td>
          </Tr>
          <Tr>
          <Td>Integrations-Deactivate</Td>
          <Td>
            <Switch
              name="integrations.deactivate"
              value={!integrationsdeactivate}
              onChange={(e) => {
                setintegrationsdeactivate(!integrationsdeactivate);
                togglefunction(e);
              }}
              isChecked={integrationsdeactivate}
            />
          </Td>
        </Tr>
        <Tr>
        <Td>Integrations-Activate</Td>
        <Td>
          <Switch
            name="integrations.active"
            value={!integrationsactive}
            onChange={(e) => {
              setintegrationsactive(!integrationsactive);
              togglefunction(e);
            }}
            isChecked={integrationsactive}
          />
        </Td>
      </Tr>
      <Tr>
      <Td>Api Key - Grant credits</Td>
      <Td>
        <Switch
          name="api-keys.credits.grant"
          value={!apikeyscreditsgrant}
          onChange={(e) => {
            setapikeyscreditsgrant(!apikeyscreditsgrant);
            togglefunction(e);
          }}
          isChecked={apikeyscreditsgrant}
        />
      </Td>
    </Tr>
    <Tr>
      <Td>Api Key - Revoke credits</Td>
      <Td>
        <Switch
          name="api-keys.credits.revoke"
          value={!apikeyscreditsrevoke}
          onChange={(e) => {
            setapikeyscreditsrevoke(!apikeyscreditsrevoke);
            togglefunction(e);
          }}
          isChecked={apikeyscreditsrevoke}
        />
      </Td>
    </Tr>
        </Tbody>
      </Table>
      <Button m={"20px"}  onClick={submite}>Submite</Button>
    </Box>
  );
}

export default App;
