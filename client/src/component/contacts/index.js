import React, { useEffect, useState } from "react";
import { Table, Button, PageHeader, Modal } from "antd";
import AddContact from "./addContact";
import moment from "moment";
import { connect } from "react-redux";
import { getContact } from "../../actions";

const Contacts = (props) => {
  const { contacts, getContact } = props;
  const [openAddContact, setOpenAddContact] = useState(false);
  const columns = [
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "mobile",
      dataIndex: "mobile",
      key: "mobile",
    },

    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (value) => {
        return moment(value).format("YYYY-MM-DD LT");
      },
      key: "createdAt",
    },
  ];

  const openAddContactForm = (req) => {
    setOpenAddContact(!openAddContact);
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <>
      <Modal
        onCancel={openAddContactForm}
        title="Add Contact"
        visible={openAddContact}
        footer={null}
      >
        <AddContact
          resolve={() => {
            setOpenAddContact(!openAddContact);
          }}
        ></AddContact>
      </Modal>
      <PageHeader
        title="Contacts"
        extra={[<Button type="primary"> Logout</Button>]}
      ></PageHeader>
      <Table columns={columns} dataSource={contacts}></Table>
      <Button
        type="primary"
        onClick={openAddContactForm}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
        }}
      >
        {" "}
        Add
      </Button>
    </>
  );
};
function mapStateToProps({ contacts }) {
  return { contacts };
}
export default connect(mapStateToProps, { getContact })(Contacts);
