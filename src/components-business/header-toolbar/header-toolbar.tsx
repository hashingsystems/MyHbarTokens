import React from "react";
import { Row } from "../../components/direction";
import { Icon } from "../../components/icon";
import { Select, NativeSelect } from "@material-ui/core";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { LANDING_MAIN_PAGE_ROUTE_ID } from "../../constants/route";
import { LabelLarge } from "../../components/label";
import styled from "styled-components";

const LogoText = styled(LabelLarge)`
  :hover {
    cursor: pointer;
  }
`

class HeaderToolbarPureComponent extends React.Component<RouteComponentProps> {
  state = {
    selectedConnectionOption: "online"
  }

  ConnectionStatusDropdownList = () => {
    return (
      <Row style={{ borderRadius: 5, borderColor: "#5ac1bc", borderWidth: 1, marginLeft: "auto", borderStyle: "solid", display: "none" }}>
        <Icon
          style={{ width: 20, height: 15, marginLeft: 10, marginRight: 10 }}
          iconType={this.state.selectedConnectionOption === "offline" ? "wifi_not_connected" : "wifi_connected"}
        />
        <div style={{ height: "100%", width: 1, backgroundColor: "#5ac1bc" }} />
        <NativeSelect
          style={{ paddingLeft: 20, paddingRight: 20, width: 150, fontFamily: "inherit" }}
          disableUnderline
          value={this.state.selectedConnectionOption}
          onChange={(event) => {
            this.setState({
              selectedConnectionOption: event.target.value
            })
          }}
        >
          <option value={"offline"}>Offline</option>
          <option value={"online"}>Online</option>
        </NativeSelect>
      </Row>
    )
  }

  render() {
    return (
      <Row style={{ paddingTop: 20, paddingLeft: 45, paddingRight: 30 }}>
        <Icon style={{ height: 30, width: 30, marginRight: 5 }} iconType="logo_main" onClick={this._handleClickLogoMain} />
        <LogoText style={{ marginLeft: 5 }} onClick={this._handleClickLogoMain} >MyHbarTokens</LogoText>
        <this.ConnectionStatusDropdownList />
      </Row>
    )
  }

  _handleClickLogoMain = () => {
    this.props.history.push(LANDING_MAIN_PAGE_ROUTE_ID)
  }
}

export const HeaderToolbar = withRouter(HeaderToolbarPureComponent)