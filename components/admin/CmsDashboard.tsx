"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiAlertTriangle,
  FiAward,
  FiBookOpen,
  FiCalendar,
  FiCheckCircle,
  FiEdit,
  FiExternalLink,
  FiFileText,
  FiFolder,
  FiGrid,
  FiImage,
  FiLogOut,
  FiMapPin,
  FiPlus,
  FiPlusCircle,
  FiTrash2,
  FiUploadCloud,
  FiUsers,
  FiX,
} from "react-icons/fi";

import { conferences as initialConferences } from "@/data/conferences";
import { events as initialEvents } from "@/data/events";
import { executiveMembers as initialMembers } from "@/data/organization";
import { logout } from "@/app/admin/actions";

type TabType =
  | "overview"
  | "events"
  | "conferences"
  | "executive"
  | "gallery"
  | "resources"
  | "media";

export default function CmsDashboard({
  userEmail,
  adminRole,
}: {
  userEmail: string;
  adminRole: string;
}) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [eventsList, setEventsList] = useState(initialEvents);
  const [conferencesList, setConferencesList] = useState(initialConferences);
  const [membersList, setMembersList] = useState(initialMembers);
  const [galleryList, setGalleryList] = useState([
    { id: 1, title: "Diplomatic Session", category: "Conference", src: "/session.jpg" },
    { id: 2, title: "NBMUN Opening Ceremony", category: "Ceremony", src: "/nbmun.jpg" },
    { id: 3, title: "Delegate Workshop", category: "Workshop", src: "/event-1.jpg" },
  ]);

  // Modal and Notification states
  const [notification, setNotification] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<{
    type: string;
    id: number;
    title: string;
  } | null>(null);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);

  // New Event Form State
  const [newEvent, setNewEvent] = useState({
    title: "",
    category: "Workshop",
    date: "",
    time: "",
    location: "University of Rajshahi",
    description: "",
    status: "Published",
  });

  function showFeedback(msg: string) {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  }

  function handleToggleEventStatus(id: number) {
    setEventsList((prev) =>
      prev.map((ev) =>
        ev.id === id ? { ...ev, isPublished: !ev.isPublished } : ev
      )
    );
    showFeedback("Event publication status updated successfully.");
  }

  function handleCreateEvent(e: React.FormEvent) {
    e.preventDefault();
    if (!newEvent.title.trim()) return;

    const created = {
      id: Date.now(),
      title: newEvent.title,
      description: newEvent.description || "Executive-managed event session.",
      date: newEvent.date || "Upcoming 2026",
      dateTime: "2026-09-01",
      time: newEvent.time || "10:00 AM",
      startDateTime: "2026-09-01T10:00:00",
      location: newEvent.location,
      image: "/event-1.jpg",
      category: newEvent.category,
      detailsLink: "#contact",
      isPublished: newEvent.status === "Published",
      displayOrder: eventsList.length + 1,
    };

    setEventsList([created, ...eventsList]);
    setIsAddEventOpen(false);
    setNewEvent({
      title: "",
      category: "Workshop",
      date: "",
      time: "",
      location: "University of Rajshahi",
      description: "",
      status: "Published",
    });
    showFeedback("New event created and saved successfully.");
  }

  function confirmDelete() {
    if (!deleteTarget) return;

    if (deleteTarget.type === "event") {
      setEventsList((prev) => prev.filter((item) => item.id !== deleteTarget.id));
      showFeedback(`Event "${deleteTarget.title}" deleted.`);
    } else if (deleteTarget.type === "conference") {
      setConferencesList((prev) => prev.filter((item) => item.id !== deleteTarget.id));
      showFeedback(`Conference "${deleteTarget.title}" deleted.`);
    } else if (deleteTarget.type === "member") {
      setMembersList((prev) => prev.filter((item) => item.id !== deleteTarget.id));
      showFeedback(`Member "${deleteTarget.title}" removed.`);
    } else if (deleteTarget.type === "gallery") {
      setGalleryList((prev) => prev.filter((item) => item.id !== deleteTarget.id));
      showFeedback(`Photo "${deleteTarget.title}" deleted.`);
    }

    setDeleteTarget(null);
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      {/* Top Header */}
      <header className="sticky top-0 z-40 border-b border-[#172554] bg-[#0b192e] text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-white hover:text-[#93c5fd]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#3b82f6]/50 bg-[#1d4ed8]/30 font-serif text-sm font-bold text-[#93c5fd]">
                RU
              </div>
              <div>
                <p className="font-serif text-lg font-bold leading-none tracking-wide text-white">
                  RUMUNA CMS
                </p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-[#93c5fd]">
                  Executive Control Panel
                </p>
              </div>
            </Link>
          </div>

          {/* Quick Nav Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/90 transition hover:border-[#3b82f6] hover:bg-[#1d4ed8]/20 hover:text-white"
            >
              <span>View Live Website</span>
              <FiExternalLink className="text-xs" aria-hidden="true" />
            </Link>

            <form action={logout}>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded bg-[#1d4ed8] px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-[#1e40af]"
              >
                <FiLogOut aria-hidden="true" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Global Notification Banner */}
      {notification && (
        <div className="bg-[#1d4ed8] px-4 py-3 text-center text-xs font-semibold text-white shadow-md animate-fade-in">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
            <FiCheckCircle className="text-base text-[#93c5fd]" />
            <span>{notification}</span>
          </div>
        </div>
      )}

      {/* Workspace Wrapper */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* User Status Card */}
        <section className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-block rounded bg-blue-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1d4ed8]">
              Role: {adminRole}
            </span>
            <h1 className="mt-2 text-xl font-bold text-[#0f172a]">
              Content Management Dashboard
            </h1>
            <p className="text-xs text-slate-500">
              Logged in as <strong className="text-[#0f172a]">{userEmail}</strong>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setIsAddEventOpen(true)}
              className="inline-flex items-center gap-1.5 rounded bg-[#1d4ed8] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#1e40af]"
            >
              <FiPlusCircle className="text-sm" />
              <span>Add New Event</span>
            </button>

            <button
              onClick={() => setIsMediaModalOpen(true)}
              className="inline-flex items-center gap-1.5 rounded border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:border-[#1d4ed8] hover:text-[#1d4ed8]"
            >
              <FiUploadCloud className="text-sm" />
              <span>Upload Image</span>
            </button>
          </div>
        </section>

        {/* Tab Navigation */}
        <nav className="mt-8 border-b border-slate-200" aria-label="CMS Sections">
          <div className="flex space-x-2 overflow-x-auto pb-px scrollbar-none">
            {[
              { id: "overview", label: "Dashboard", icon: FiGrid },
              { id: "events", label: "Events", count: eventsList.length, icon: FiCalendar },
              { id: "conferences", label: "Conferences", count: conferencesList.length, icon: FiAward },
              { id: "executive", label: "Governing Body", count: membersList.length, icon: FiUsers },
              { id: "gallery", label: "Gallery", count: galleryList.length, icon: FiImage },
              { id: "resources", label: "Resources", count: 3, icon: FiBookOpen },
              { id: "media", label: "Media Library", icon: FiFolder },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`inline-flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-bold whitespace-nowrap transition ${
                    isActive
                      ? "border-[#1d4ed8] text-[#1d4ed8]"
                      : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"
                  }`}
                >
                  <Icon className="text-sm" />
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] ${
                        isActive
                          ? "bg-blue-100 text-[#1d4ed8]"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="mt-8 space-y-8 animate-fade-in">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-xs font-bold uppercase tracking-wider">Events</span>
                  <FiCalendar className="text-lg text-[#1d4ed8]" />
                </div>
                <p className="mt-3 font-serif text-3xl font-bold text-[#0f172a]">
                  {eventsList.length}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {eventsList.filter((e) => e.isPublished).length} Published
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-xs font-bold uppercase tracking-wider">Conferences</span>
                  <FiAward className="text-lg text-[#1d4ed8]" />
                </div>
                <p className="mt-3 font-serif text-3xl font-bold text-[#0f172a]">
                  {conferencesList.length}
                </p>
                <p className="mt-1 text-xs text-slate-500">Active Ecosystem</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-xs font-bold uppercase tracking-wider">Leadership</span>
                  <FiUsers className="text-lg text-[#1d4ed8]" />
                </div>
                <p className="mt-3 font-serif text-3xl font-bold text-[#0f172a]">
                  {membersList.length}
                </p>
                <p className="mt-1 text-xs text-slate-500">Executive Members</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between text-slate-500">
                  <span className="text-xs font-bold uppercase tracking-wider">Gallery</span>
                  <FiImage className="text-lg text-[#1d4ed8]" />
                </div>
                <p className="mt-3 font-serif text-3xl font-bold text-[#0f172a]">
                  {galleryList.length}
                </p>
                <p className="mt-1 text-xs text-slate-500">Uploaded Photos</p>
              </div>
            </div>

            {/* Quick Management Shortcuts */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-[#0f172a]">
                Quick Management Links
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Direct actions for updating RUMUNA content.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <button
                  onClick={() => setActiveTab("events")}
                  className="flex items-center justify-between rounded-lg border border-slate-200 p-4 text-left hover:border-[#1d4ed8] hover:bg-blue-50"
                >
                  <div>
                    <p className="text-xs font-bold text-[#0f172a]">Manage Events</p>
                    <p className="text-[11px] text-slate-500">Add or edit upcoming workshops</p>
                  </div>
                  <span className="text-[#1d4ed8] font-bold">→</span>
                </button>

                <button
                  onClick={() => setActiveTab("conferences")}
                  className="flex items-center justify-between rounded-lg border border-slate-200 p-4 text-left hover:border-[#1d4ed8] hover:bg-blue-50"
                >
                  <div>
                    <p className="text-xs font-bold text-[#0f172a]">Manage Conferences</p>
                    <p className="text-[11px] text-slate-500">Season IV & V details</p>
                  </div>
                  <span className="text-[#1d4ed8] font-bold">→</span>
                </button>

                <button
                  onClick={() => setActiveTab("executive")}
                  className="flex items-center justify-between rounded-lg border border-slate-200 p-4 text-left hover:border-[#1d4ed8] hover:bg-blue-50"
                >
                  <div>
                    <p className="text-xs font-bold text-[#0f172a]">Governing Body</p>
                    <p className="text-[11px] text-slate-500">Update committee members</p>
                  </div>
                  <span className="text-[#1d4ed8] font-bold">→</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: EVENTS MANAGEMENT */}
        {activeTab === "events" && (
          <div className="mt-8 space-y-6 animate-fade-in">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#0f172a]">
                  Event Management
                </h2>
                <p className="text-xs text-slate-500">
                  Publish workshops, delegate training sessions, and international dialogues.
                </p>
              </div>

              <button
                onClick={() => setIsAddEventOpen(true)}
                className="inline-flex items-center gap-1.5 rounded bg-[#1d4ed8] px-4 py-2 text-xs font-bold text-white hover:bg-[#1e40af]"
              >
                <FiPlus className="text-sm" />
                <span>Create New Event</span>
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {eventsList.map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#1d4ed8]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-blue-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1d4ed8]">
                        {event.category}
                      </span>

                      <button
                        onClick={() => handleToggleEventStatus(event.id)}
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                          event.isPublished
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${event.isPublished ? "bg-green-600" : "bg-amber-600"}`} />
                        <span>{event.isPublished ? "Published" : "Draft"}</span>
                      </button>
                    </div>

                    <h3 className="mt-3 font-serif text-lg font-bold text-[#0f172a]">
                      {event.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs text-slate-600">
                      {event.description}
                    </p>

                    <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-[11px] text-slate-500">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="text-[#1d4ed8]" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin className="text-[#1d4ed8]" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3">
                    <button
                      onClick={() => handleToggleEventStatus(event.id)}
                      className="text-xs font-semibold text-[#1d4ed8] hover:underline"
                    >
                      {event.isPublished ? "Unpublish" : "Publish"}
                    </button>

                    <button
                      onClick={() =>
                        setDeleteTarget({
                          type: "event",
                          id: event.id,
                          title: event.title,
                        })
                      }
                      className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-800"
                    >
                      <FiTrash2 className="text-xs" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CONFERENCES */}
        {activeTab === "conferences" && (
          <div className="mt-8 space-y-6 animate-fade-in">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#0f172a]">
                Conference Management
              </h2>
              <p className="text-xs text-slate-500">
                Manage RUMUN and NBMUN conference editions, dates, and registration links.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {conferencesList.map((conf) => (
                <div
                  key={conf.id}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-blue-100 px-3 py-1 text-xs font-bold text-[#1d4ed8]">
                      {conf.edition}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Year: {conf.date}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-xl font-bold text-[#0f172a]">
                    {conf.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#1d4ed8]">
                    Theme: {conf.theme}
                  </p>
                  <p className="mt-3 text-xs leading-6 text-slate-600">
                    {conf.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs text-slate-500">Venue: {conf.venue}</span>

                    <button
                      onClick={() =>
                        showFeedback(`Editing preferences saved for ${conf.edition}`)
                      }
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#1d4ed8] hover:underline"
                    >
                      <FiEdit aria-hidden="true" />
                      <span>Edit Conference</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: EXECUTIVE & GOVERNING BODY */}
        {activeTab === "executive" && (
          <div className="mt-8 space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#0f172a]">
                  Governing Body & Leadership Roster
                </h2>
                <p className="text-xs text-slate-500">
                  Manage committee positions, department information, and tenures.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {membersList.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-[#1d4ed8]">
                      {member.position}
                    </p>
                    <h3 className="truncate font-serif text-base font-bold text-[#0f172a]">
                      {member.name}
                    </h3>
                    <p className="truncate text-xs text-slate-500">
                      {member.department} · {member.tenure}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setDeleteTarget({
                        type: "member",
                        id: member.id,
                        title: `${member.position} - ${member.name}`,
                      })
                    }
                    className="ml-3 text-red-600 hover:text-red-800"
                    title="Remove member"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: GALLERY */}
        {activeTab === "gallery" && (
          <div className="mt-8 space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#0f172a]">
                  Gallery & Photo Manager
                </h2>
                <p className="text-xs text-slate-500">
                  Upload, caption, or remove photographs displayed in the site gallery.
                </p>
              </div>

              <button
                onClick={() => setIsMediaModalOpen(true)}
                className="inline-flex items-center gap-1.5 rounded bg-[#1d4ed8] px-4 py-2 text-xs font-bold text-white hover:bg-[#1e40af]"
              >
                <FiUploadCloud className="text-sm" />
                <span>Upload Photo</span>
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryList.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="text-xs font-bold text-[#0f172a]">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-slate-500">{item.category}</p>
                    </div>

                    <button
                      onClick={() =>
                        setDeleteTarget({
                          type: "gallery",
                          id: item.id,
                          title: item.title,
                        })
                      }
                      className="text-xs font-semibold text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: RESOURCES */}
        {activeTab === "resources" && (
          <div className="mt-8 space-y-6 animate-fade-in">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#0f172a]">
                Delegate Resources
              </h2>
              <p className="text-xs text-slate-500">
                Manage study guides, rules of procedure, and delegate guidelines.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {["Study Guides", "Rules of Procedure", "Delegate Toolkit"].map((title) => (
                <div key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-xl text-[#1d4ed8]">
                    <FiFileText />
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-bold text-[#0f172a]">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Status: Preparing for Publication
                  </p>
                  <button
                    onClick={() => showFeedback(`Resource updated: ${title}`)}
                    className="mt-4 text-xs font-bold text-[#1d4ed8] hover:underline"
                  >
                    Upload Material File
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: MEDIA LIBRARY */}
        {activeTab === "media" && (
          <div className="mt-8 space-y-6 animate-fade-in">
            <div className="rounded-xl border border-dashed border-[#1d4ed8]/40 bg-blue-50/50 p-8 text-center">
              <FiUploadCloud className="mx-auto text-4xl text-[#1d4ed8]" />
              <h3 className="mt-3 font-serif text-xl font-bold text-[#0f172a]">
                Visual Image Uploader
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Drag and drop images here, or click to choose files from your computer or phone.
              </p>
              <button
                onClick={() => setIsMediaModalOpen(true)}
                className="mt-4 rounded bg-[#1d4ed8] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#1e40af]"
              >
                Select Files to Upload
              </button>
            </div>
          </div>
        )}
      </div>

      {/* CREATE EVENT MODAL */}
      {isAddEventOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl animate-scale-in">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif text-xl font-bold text-[#0f172a]">
                Create New Event
              </h3>
              <button
                onClick={() => setIsAddEventOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            <form onSubmit={handleCreateEvent} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0f172a]">
                  Event Title *
                </label>
                <input
                  type="text"
                  required
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  placeholder="e.g. Model UN Secretariat Workshop"
                  className="mt-1.5 w-full rounded border border-slate-300 px-3.5 py-2 text-xs outline-none focus:border-[#1d4ed8]"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-[#0f172a]">
                    Category
                  </label>
                  <select
                    value={newEvent.category}
                    onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
                    className="mt-1.5 w-full rounded border border-slate-300 px-3.5 py-2 text-xs outline-none focus:border-[#1d4ed8]"
                  >
                    <option value="Workshop">Workshop</option>
                    <option value="Training">Training</option>
                    <option value="Dialogue">Dialogue</option>
                    <option value="Conference">Conference</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0f172a]">
                    Status
                  </label>
                  <select
                    value={newEvent.status}
                    onChange={(e) => setNewEvent({ ...newEvent, status: e.target.value })}
                    className="mt-1.5 w-full rounded border border-slate-300 px-3.5 py-2 text-xs outline-none focus:border-[#1d4ed8]"
                  >
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-[#0f172a]">
                    Date
                  </label>
                  <input
                    type="text"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    placeholder="e.g. 20 October 2026"
                    className="mt-1.5 w-full rounded border border-slate-300 px-3.5 py-2 text-xs outline-none focus:border-[#1d4ed8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0f172a]">
                    Time
                  </label>
                  <input
                    type="text"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                    placeholder="e.g. 10:00 AM"
                    className="mt-1.5 w-full rounded border border-slate-300 px-3.5 py-2 text-xs outline-none focus:border-[#1d4ed8]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0f172a]">
                  Location / Venue
                </label>
                <input
                  type="text"
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                  placeholder="e.g. Senate Building, University of Rajshahi"
                  className="mt-1.5 w-full rounded border border-slate-300 px-3.5 py-2 text-xs outline-none focus:border-[#1d4ed8]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0f172a]">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                  placeholder="Brief summary of the event"
                  className="mt-1.5 w-full rounded border border-slate-300 px-3.5 py-2 text-xs outline-none focus:border-[#1d4ed8]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 border-t border-slate-100 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddEventOpen(false)}
                  className="rounded border border-slate-300 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded bg-[#1d4ed8] px-5 py-2 text-xs font-bold text-white hover:bg-[#1e40af]"
                >
                  Save & Publish Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MEDIA UPLOAD MODAL */}
      {isMediaModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl animate-scale-in">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif text-xl font-bold text-[#0f172a]">
                Upload Image
              </h3>
              <button
                onClick={() => setIsMediaModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-lg border-2 border-dashed border-[#1d4ed8]/50 bg-blue-50/40 p-6 text-center">
                <FiUploadCloud className="mx-auto text-3xl text-[#1d4ed8]" />
                <p className="mt-2 text-xs font-bold text-[#0f172a]">
                  Choose photo from device
                </p>
                <p className="text-[11px] text-slate-500">
                  Supports JPG, PNG, WEBP (Max 5MB)
                </p>
              </div>

              <div className="flex items-center justify-end gap-2 border-t border-slate-100 pt-3">
                <button
                  onClick={() => setIsMediaModalOpen(false)}
                  className="rounded border border-slate-300 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsMediaModalOpen(false);
                    showFeedback("Image uploaded to library successfully.");
                  }}
                  className="rounded bg-[#1d4ed8] px-5 py-2 text-xs font-bold text-white hover:bg-[#1e40af]"
                >
                  Simulate Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRM DELETE MODAL */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl animate-scale-in">
            <div className="flex items-center gap-3 text-red-600">
              <FiAlertTriangle className="text-2xl" />
              <h3 className="font-serif text-lg font-bold text-[#0f172a]">
                Confirm Delete?
              </h3>
            </div>

            <p className="mt-3 text-xs leading-5 text-slate-600">
              Are you sure you want to remove <strong>&quot;{deleteTarget.title}&quot;</strong>? This item will no longer appear on the website.
            </p>

            <div className="mt-6 flex items-center justify-end gap-2">
              <button
                onClick={() => setDeleteTarget(null)}
                className="rounded border border-slate-300 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="rounded bg-red-600 px-4 py-2 text-xs font-bold text-white hover:bg-red-700"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}